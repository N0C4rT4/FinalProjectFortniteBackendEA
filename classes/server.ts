
import express from 'express';
// default porque este archivo 
//solo tendra esta clase para exportar
//asi se vera mejor el codigo

export default class Server {

    public app : express.Application;
    public port: number = 3000;

    constructor() {
        this.app = express();
    }

    start( callback: Function ) {
        this.app.listen(  this.port, callback );
    }

}