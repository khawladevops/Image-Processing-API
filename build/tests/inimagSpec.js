"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const imgProc_1 = require("../utilities/imgProc");
// This file is for testing the image resizing functionality
describe("Here to test image process", () => {
    it("this test image resizing is working well", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, imgProc_1.resizeImage)("./assist/images/img1.jpg", "./assist/modifiedIMG/img1200200.jpg", 200, 200);
        if (fs_1.default.existsSync("./assist/modifiedIMG/img1200200.jpg")) {
            return true;
        }
        return false;
    }));
    it("this test image resizing is not working", () => __awaiter(void 0, void 0, void 0, function* () {
        // Try to resize an image that not locally saved!
        try {
            (0, imgProc_1.resizeImage)("./assist/images/img4.jpg", "./assist/modifiedIMG/img1200200.jpg", 200, 200);
        }
        catch (Error) { }
    }));
});
