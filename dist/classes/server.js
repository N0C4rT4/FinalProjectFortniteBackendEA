"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// default porque este archivo 
//solo tendra esta clase para exportar
//asi se vera mejor el codigo
class Server {
    constructor() {
        this.port = 3000;
        this.app = express_1.default();
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
