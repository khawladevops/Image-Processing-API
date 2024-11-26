import fs from "fs";
const sharp = require("sharp");

sharp.cache(false); //Turn the cashe off so I can get the modification.

/* Function paramiter: 
    source: the path to the original image
    url: the path the after rezing to save image to.
    w: user interd width
    h: user interd height */

async function resizeImage(
  source: string,
  url: string,
  w: number,
  h: number
): Promise<void> {
  const buffer = await sharp(source)
    .resize({
      width: w,
      height: h,
    })
    .toBuffer()
    .then(
      fs.copyFile(source, url, (err) => {
        if (err) throw err;
      })
    );
  await sharp(buffer).toFile(url);
}
export { resizeImage };
