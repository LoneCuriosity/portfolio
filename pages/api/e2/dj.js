const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg');
import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'public/song.mp3')
const songBuffer = fs.readFileSync(filePath)

export default function handler(req, res) {
    const { URL } = req.query

    if(ytdl.validateURL(URL)){
        let stream = ytdl(URL,{ quality: 'highestaudio' })

        ffmpeg(stream)
            .audioBitrate(128)
            .save(`public/song.mp3`)
            .on('end', () => {
                res.status(200).json({"status":"done"})
            })
    } else {
        res.setHeader('Content-Type', 'audio/mpeg')
        res.send(songBuffer)
    }
}