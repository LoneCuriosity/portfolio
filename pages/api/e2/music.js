const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg');

export default function handler(req, res) {
    const { URL } = req.query

    if(ytdl.validateURL(URL)){
        let stream = ytdl(URL,{ quality: 'highestaudio' })

        res.setHeader('Content-Disposition', `attachment; filename=song.mp3`);
        ffmpeg(stream)
            .audioBitrate(128)
            .format('mp3')
            .pipe(res, { end: true });
    } else {
        res.status(400).json({"ERROR":"Not valid URL"})
    }
}