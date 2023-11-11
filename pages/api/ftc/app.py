import requests
import numpy as np
import math
from sklearn.linear_model import LogisticRegression
import json
import sys

# Step 5: Define a function to predict the outcome of a match
def bool_predict_winner(red_alliance, blue_alliance, rankings, model):
    # Check if the team numbers are in the rankings data
    for team_number in red_alliance + blue_alliance:
        if team_number not in rankings:
            return f"Team number {team_number} not found in the rankings data."

    # Get the rankings data for the teams and average it for each alliance
    red_data = np.mean([rankings[team_number] for team_number in red_alliance], axis=0)
    blue_data = np.mean([rankings[team_number] for team_number in blue_alliance], axis=0)

    # Prepare the data for prediction
    X = np.array([np.concatenate((red_data, blue_data))])

    # Use the model to predict the outcome
    prediction = model.predict(X)

    # Return the predicted outcome
    return int(prediction[0])

def perc_predict_winner(red_alliance, blue_alliance, rankings, model):
    # Check if the team numbers are in the rankings data
    for team_number in red_alliance + blue_alliance:
        if team_number not in rankings:
            return f"Team number {team_number} not found in the rankings data."

    # Get the rankings data for the teams and average it for each alliance
    red_data = np.mean([rankings[team_number] for team_number in red_alliance], axis=0)
    blue_data = np.mean([rankings[team_number] for team_number in blue_alliance], axis=0)

    # Prepare the data for prediction
    X = np.array([np.concatenate((red_data, blue_data))])

    # Use the model to predict the outcome
    probabilities = model.predict_proba(X)

    # The second element of the first (and only) entry in probabilities gives the probability of the class being 1
    probability_red_wins = probabilities[0][1]

    # Return the predicted outcome as a probability
    return probability_red_wins

def pred_threshold_cal(matches, rankings, model):
    top_accuracy = 0
    top_threshold = 0

    for x in range(1,100,1):
        pred_outcome = []
        real_outcome = []

        for match in matches:
            red_team = [team['teamNumber'] for team in match['teams'] if team['station'].startswith('Red')]
            blue_team = [team['teamNumber'] for team in match['teams'] if team['station'].startswith('Blue')]

            red_score, blue_score = match['scoreRedFinal'], match['scoreBlueFinal']

            pred_outcome.append(perc_predict_winner(red_team, blue_team, rankings, model) >= (x/10))
            real_outcome.append(True if red_score > blue_score else False)

        total = 0

        for index, pred in enumerate(pred_outcome):
            if pred == real_outcome[index]:
                total += 1

        accuracy = math.floor(total/len(pred_outcome)*100)

        if accuracy > top_accuracy:
            top_accuracy = accuracy
            top_threshold = (x/10)

    return [top_accuracy, top_threshold]

def pred_bool_acc_cal(matches, rankings, model):
    pred_outcome = []
    real_outcome = []

    for match in matches:
        red_team = [team['teamNumber'] for team in match['teams'] if team['station'].startswith('Red')]
        blue_team = [team['teamNumber'] for team in match['teams'] if team['station'].startswith('Blue')]

        red_score, blue_score = match['scoreRedFinal'], match['scoreBlueFinal']

        pred_outcome.append(bool_predict_winner(red_team, blue_team, rankings, model))
        real_outcome.append(True if red_score > blue_score else False)

    total = 0

    for index, pred in enumerate(pred_outcome):
        if pred == real_outcome[index]:
            total += 1

    accuracy = math.floor(total/len(pred_outcome)*100)

    return accuracy

if len(sys.argv) < 6:
    print(json.dumps({ "error": "Missing Args", "red_win_perc": "" }))
    sys.exit(1)

red1 = sys.argv[1]
red2 = sys.argv[2]
blue1 = sys.argv[3]
blue2 = sys.argv[4]
session = sys.argv[5]
event = sys.argv[6]

# Step 1: Access FTC API and fetch historical match and team data
api_url = "http://ftc-api.firstinspires.org/v2.0/"

headers = {'Authorization': 'Basic cmFtb25nanI6NDk3RTVBMDMtOEI3QS00N0ZCLUI2QjMtQ0Q5MzczMzlFOTU2'}

# Fetch data for matches
matches_response = requests.get(api_url + session + "/matches/" + event, headers=headers)
matches_data = matches_response.json()

# Fetch data for teams
teams_response = requests.get(api_url + session + "/teams?eventCode=" + event, headers=headers)
teams_data = teams_response.json()

# Fetch data for teams
rankings_response = requests.get(api_url + session + "/rankings/" + event, headers=headers)
rankings_data = rankings_response.json()

# Step 2: Preprocess the data
rankings = {team['teamNumber']: (team['wins'], team['losses']) for team in rankings_data['Rankings']}
matches = matches_data['matches']

# Step 3: Prepare the data for the machine learning model
X = []
y = []

for match in matches:
    red_score, blue_score = match['scoreRedFinal'], match['scoreBlueFinal']
    red_team = [team for team in match['teams'] if team['station'].startswith('Red')]
    blue_team = [team for team in match['teams'] if team['station'].startswith('Blue')]
    
    if red_team and blue_team:
        red_team_number = red_team[0]['teamNumber']
        blue_team_number = blue_team[0]['teamNumber']
        
        if red_team_number in rankings and blue_team_number in rankings:
            red_wins, red_losses = rankings[red_team_number]
            blue_wins, blue_losses = rankings[blue_team_number]
            
            X.append([red_wins, red_losses, blue_wins, blue_losses])
            y.append(1 if red_score > blue_score else 0)

# Convert lists to numpy arrays
X = np.array(X)
y = np.array(y)

# Step 4: Train the machine learning model
model = LogisticRegression()
model.fit(X, y)

prob_threshold = pred_threshold_cal(matches, rankings, model)
bool_threshold = pred_bool_acc_cal(matches, rankings, model)

if prob_threshold[0] > bool_threshold:
    preffered_method = perc_predict_winner
else:
    preffered_method = bool_predict_winner

# Convert the parameters to integers after validation
red1 = int(red1)
red2 = int(red2)
blue1 = int(blue1)
blue2 = int(blue2)

print(json.dumps({ "error": "", "red_win_perc": preffered_method([red1,red2],[blue1,blue2], rankings, model) }))