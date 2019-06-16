import jwt from 'jsonwebtoken';

//obtenemos token para que el usuario
// se registre y a login en la misma app

export default class Token {
    //el seed es lo mas importante
    //toda la info relevante

    private static seed: string = 'este-es-el-seed-de-mi-app-secreto';
    private static caducidad: string = '30d';

    constructor() { }
    //lo que esta dentro del token

    static getJwtToken( payload: any ): string {
        return jwt.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });

    }

    static comprobarToken( userToken: string ) {

        return new Promise( (resolve, reject ) => {

            jwt.verify( userToken, this.seed, ( err, decoded ) => {
    
                if ( err ) {//no confiar
                    reject();
                } else {
                    //este es el q tiene toda la info id, avatar..
                    resolve( decoded );
                }
    
    
            })

        });


    }


}


