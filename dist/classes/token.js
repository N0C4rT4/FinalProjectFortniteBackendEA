"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//obtenemos token para que el usuario
// se registre y a login en la misma app
class Token {
    constructor() { }
    //lo que esta dentro del token
    static getJwtToken(payload) {
        return jsonwebtoken_1.default.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });
    }
    static comprobarToken(userToken) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(userToken, this.seed, (err, decoded) => {
                if (err) { //no confiar
                    reject();
                }
                else {
                    //este es el q tiene toda la info id, avatar..
                    resolve(decoded);
                }
            });
        });
    }
}
//el seed es lo mas importante
//toda la info relevante
Token.seed = 'este-es-el-seed-de-mi-app-secreto';
Token.caducidad = '30d';
exports.default = Token;
