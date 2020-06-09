require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? ".env.test" : ".env"
});
const express = require('express');//estou importanto o uso(métodos do express)


class AppController {
    constructor(){//constructor irá executar automaticamente os métodos da classe AppControler
        this.express = express();

        this.middlewares();
        this.routes();
    }


middlewares(){
    this.express.use(express.json());//middleware para uso do json.(*ESTUDAR MIDDLEWARE)
}

routes(){
    this.express.use(require('./routes'));//Ira usar as rotas criadas no file routers.js
    }
}


module.exports = new AppController().express;//exporta o AppControler, para ser usado quando houver um require.