const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const db = await sqlite.open({ filename: './mydb.sqlite', driver: sqlite3.Database })
        const pins = await db.all('SELECT * from pins')

        res.json(pins)
    } else if (req.method === 'POST') {
        const { pin26, pin19, pin13, pin6 } = req.body
        
        const db = await sqlite.open({ filename: './mydb.sqlite', driver: sqlite3.Database })

        await db.run('UPDATE Pins SET Pin26 = ?, Pin19 = ?, Pin13 = ?, Pin6 = ? WHERE id = ?', pin26, pin19, pin13, pin6, 1)

        const pins = await db.all('SELECT * from pins')

        res.json(pins)
    } else {
        res.json({ 'ERROR': 'Invalid Method' })
    }
}
