import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { dirname, join } from "path/posix";
import validate from "../../middleware/validation";
import { resizeImage } from "../../utilities/imgProc";
import { QueuingStrategy } from "stream/web";
import { AsyncLocalStorage } from "async_hooks";
import { resolve } from "path/win32";

//Processing the request form the user intered URl.

const routes = express.Router();

routes.get(
  "/",
  validate,
  async (req: Request, res: Response): Promise<string | any> => {
    const { filename } = req.query;
    const imagepathOriginal: string = join(
      __dirname,
      "../../../assist/images",
      `${filename}.jpg`
    );
    const imagepathModified: string = join(
      __dirname,
      "../../../assist/modifiedIMG",
      `${filename}.jpg`
    );
    // User not asking for modification
    if (!(req.query.width || req.query.height)) {
      //Case 1: image in original
      if (fs.existsSync(imagepathOriginal)) {
        return res.sendFile(imagepathOriginal);
      }
      //Case 2: image in modified
      else {
        if (fs.existsSync(imagepathModified)) {
          return res.sendFile(imagepathModified);
        }
        //Case 3: image not founded in localstorage!!
        else return res.status(404).send("Error image not found");
      }
    } else {
      // asking for modification
      //check if the image is exsitng in local storage to be modified
      if (!fs.existsSync(imagepathOriginal)) {
        return res.status(404).send("Error image not found");
      }
      const w = Number(req.query.width);
      const h = Number(req.query.height);
      if (Number.isInteger(w) && Number.isInteger(h)) {
        //Creat the path of modified images
        const url_: string = join(
          __dirname,
          "../../../assist/modifiedIMG",
          `${filename}` + w + h + `.jpg`
        );
        //Case 4: if asking to modify previously modified image.
        if (fs.existsSync(url_)) {
          return res.sendFile(url_);

        } else {
        //Case 5: Modify the size of the image and save it.
          await resizeImage(imagepathOriginal, url_, w, h);
          return res.sendFile(url_);   
        }
      }
           //Case 6: User does not provide integer value
      else return res.status(404).send("Error No integer intered");
    }
  }
);
export default routes;
