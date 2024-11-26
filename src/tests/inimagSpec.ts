import fs from "fs";
import { resizeImage } from "../utilities/imgProc";

// This file is for testing the image resizing functionality

describe("Here to test image process", () => {
  it("this test image resizing is working well", async (): Promise<boolean> => {
    resizeImage("./assist/images/img1.jpg","./assist/modifiedIMG/img1200200.jpg",200,200);
    if (fs.existsSync("./assist/modifiedIMG/img1200200.jpg")) {
      return true;
    }
    return false;
  });

  it("this test image resizing is not working", async (): Promise<void> => {
    // Try to resize an image that not locally saved!
    try {
      resizeImage("./assist/images/img4.jpg","./assist/modifiedIMG/img1200200.jpg",200,200);
    } catch (Error) {}
  });
});
