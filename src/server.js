const app = require('./app.js');//estou importando o classe definida no app.js

app.listen(process.env.PORT || 3000);//Estou definindo a porta 3000, para quando não houver uma variável ambiente PORT definida.