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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const posix_1 = require("path/posix");
const validation_1 = __importDefault(require("../../middleware/validation"));
const imgProc_1 = require("../../utilities/imgProc");
//Processing the request form the user intered URl.
const routes = express_1.default.Router();
routes.get("/", validation_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename } = req.query;
    const imagepathOriginal = (0, posix_1.join)(__dirname, "../../../assist/images", `${filename}.jpg`);
    const imagepathModified = (0, posix_1.join)(__dirname, "../../../assist/modifiedIMG", `${filename}.jpg`);
    // User not asking for modification
    if (!(req.query.width || req.query.height)) {
        //Case 1: image in original
        if (fs_1.default.existsSync(imagepathOriginal)) {
            return res.sendFile(imagepathOriginal);
        }
        //Case 2: image in modified
        else {
            if (fs_1.default.existsSync(imagepathModified)) {
                return res.sendFile(imagepathModified);
            }
            //Case 3: image not founded in localstorage!!
            else
                return res.status(404).send("Error image not found");
        }
    }
    else {
        // asking for modification
        //check if the image is exsitng in local storage to be modified
        if (!fs_1.default.existsSync(imagepathOriginal)) {
            return res.status(404).send("Error image not found");
        }
        const w = Number(req.query.width);
        const h = Number(req.query.height);
        if (Number.isInteger(w) && Number.isInteger(h)) {
            //Creat the path of modified images
            const url_ = (0, posix_1.join)(__dirname, "../../../assist/modifiedIMG", `${filename}` + w + h + `.jpg`);
            //Case 4: if asking to modify previously modified image.
            if (fs_1.default.existsSync(url_)) {
                return res.sendFile(url_);
            }
            else {
                //Case 5: Modify the size of the image and save it.
                yield (0, imgProc_1.resizeImage)(imagepathOriginal, url_, w, h);
                return res.sendFile(url_);
            }
        }
        //Case 6: User does not provide integer value
        else
            return res.status(404).send("Error No integer intered");
    }
}));
exports.default = routes;
