-- Up
CREATE TABLE Pins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Pin26 INT,
    Pin19 INT,
    Pin13 INT,
    Pin6 INT
);

INSERT INTO Pins (Pin26,Pin19,Pin13,Pin6) values (0,0,0,0);

-- Down
DROP TABLE pins;