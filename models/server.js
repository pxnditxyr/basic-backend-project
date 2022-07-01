import express from 'express';
import { db } from '../db/connection.js';

export class Server {
    
    constructor () {
        this.app  = express();
        this.port = process.env.PORT || '4000';
        
        this.dbConnection();
        this.middlewares();
    }

    async dbConnection () {
        try {
            await db.authenticate();
        } catch ( error ) {
            throw new Error( error );
        }
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log( `Server running on port ${ this.port }` );
        });
    }
}
