import fs from "fs"

export default function handler(req, res) {
    if (req.query.dynamicServe && req.query.dynamicServe.length) {
        const publicDir = __dirname.split(".next")[0] + "public/"
        const fileUrl = req.query.dynamicServe.join("/")
        fs.createReadStream(publicDir + fileUrl).pipe(res)
    } else {
        res.status(404).send(null)
    }
}