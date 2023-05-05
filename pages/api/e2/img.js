var Jimp = require("jimp");

export default function handler(req, res) {
    const { ImgURL, width, height, Max } = req.query
    let pixels = []

    Jimp.read({url: ImgURL}).then((image) => {
        image.resize(parseInt(width), parseInt(height), Jimp.RESIZE_BEZIER);

        image.flip(true, false)

        for (const { x, y, idx, img } of image.scanIterator(0,0,image.bitmap.width,image.bitmap.height)) {
            if((x+(y*width)) == Max && Max != 0){
                break
            }

            let RGBAValue = Jimp.intToRGBA(image.getPixelColor(x, y))
            delete RGBAValue.a

            Object.keys(RGBAValue).forEach(function(key, index) {
                RGBAValue[key] = RGBAValue[key].toString().padStart(3,"0");
            });

            pixels.push(RGBAValue)
        }

        pixels = pixels.map(Object.values)

        res.status(200).json(pixels)
    });
}
  