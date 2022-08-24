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
const app = (0, express_1.default)();
const redis_1 = require("redis");
const calculate_1 = require("./calculate");
const client = (0, redis_1.createClient)();
client.on('error', (err) => console.log('Redis Client Error', err));
// respond with "hello world" when a GET request is made to the homepage
app.get('/result', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const key = 'bot';
    const value = yield client.get(key);
    const object = JSON.parse(value);
    const result = (0, calculate_1.calculate)(object);
    return result;
}));
app.listen(3005, () => {
    console.log(`Result app listening}`);
});
