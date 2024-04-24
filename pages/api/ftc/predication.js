export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { red1, red2, blue1, blue2, session, event } = req.query

        try {
            const { spawn } = require('child_process');
            const pythonProcess = spawn('python3', ['./pages/api/ftc/app.py', red1, red2, blue1, blue2, session, event]);

            pythonProcess.stdout.on('data', (data) => {
                console.log(`Python script output: ${data}`);
                res.status(200).json(JSON.parse(data.toString('utf-8')));
            });

            pythonProcess.stderr.on('data', (data) => {
                console.error(`Error in Python script: ${data}`);
                res.status(500).json({ error: `Error in Python script: ${data}` });
            });
        } catch (error) {
            console.error(`Error running Python script: ${error}`);
            res.status(500).json({ error: `Error running Python script: ${error.message}` });
        }
    }
}
