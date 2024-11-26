"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Image1_1 = __importDefault(require("../routes/api/Image1"));
const api = express_1.default.Router();
api.get("/api", (req, res) => {
    res.send("You are in the main page.");
});
api.use("/image", Image1_1.default);
exports.default = api;
