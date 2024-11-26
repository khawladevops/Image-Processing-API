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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const test1 = (0, supertest_1.default)(index_1.default);
describe("Here to test image endpoints", () => {
    it("this test image exixtance ", () => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield test1.get("/image?filename=img1");
        expect(resp.status).toEqual(200);
    }));
    it("this test file name is not correct ", () => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield test1.get("/image?fileme=img1");
        expect(resp.status).toEqual(404);
    }));
});
