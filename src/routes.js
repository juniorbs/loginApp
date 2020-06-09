const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth')
const SessionController = require('./app/controllers/SessionController');
/*const { User } = require('./app/models')

User.create({
    name: 'Junior',
    email: 'gilmanjunior@gmail.com',
    password_hash: '12345senha12345',
});*/

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req,res) => {
    return res.status(200).send();
})

module.exports = routes;