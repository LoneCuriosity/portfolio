const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg');

export default function handler(req, res) {
    const { URL } = req.query

    if(ytdl.validateURL(URL)){
        let stream = ytdl(URL,{ quality: 'highestaudio' })

        ffmpeg(stream)
            .audioBitrate(128)
            .format('mp3')
            .writeToStream(res, { end: true })
    } else {
        res.status(400).json({"ERROR":"Not valid URL"})
    }
}