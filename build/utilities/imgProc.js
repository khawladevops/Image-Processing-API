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
exports.resizeImage = void 0;
const fs_1 = __importDefault(require("fs"));
const sharp = require("sharp");
sharp.cache(false); //Turn the cashe off so I can get the modification.
/* Function paramiter:
    source: the path to the original image
    url: the path the after rezing to save image to.
    w: user interd width
    h: user interd height */
function resizeImage(source, url, w, h) {
    return __awaiter(this, void 0, void 0, function* () {
        const buffer = yield sharp(source)
            .resize({
            width: w,
            height: h,
        })
            .toBuffer()
            .then(fs_1.default.copyFile(source, url, (err) => {
            if (err)
                throw err;
        }));
        yield sharp(buffer).toFile(url);
    });
}
exports.resizeImage = resizeImage;
