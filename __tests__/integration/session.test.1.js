/*describe('Authentication',() => {
    it('should receive JWT whe authenticated with valida credentials',() => {
    
    });
})*/
const request = require('supertest');
const app = require('../../src/app')
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');
/*describe('Authentication', () => {
    it('should sum two numbers', async () => {
    const user =  await User.create({ 
            name: 'Junior',
            email: 'gilmanjunior@gmail.com', 
            password_hash: '123444544112' 
        });
        console.log(user)
        expect(user.email).toBe('gilmanjunior@gmail.com');
    });
});*/

describe('Authentication', () => {
    beforeEach( async () => {
        await truncate();//Aguardar o retorno de uma promise, do module truncate
    });

    it('should authenticated with valid credentials', async () => {
        const user = await User.create({
            name: 'Junior',
            email: 'gilmanjunior@gmail.com',
            password: '123123'
        });

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123123'
        });

        expect(response.status).toBe(200);
    });

    it('should not authenticate with invalid credentials',
    async () => {
        const user = await User.create({
            name: 'Junior',
            email: 'gilmanjunior@gmail.com',
            password: '123123'
        });

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'
        });

        expect(response.status).toBe(401);
    });

    it('should return jwt token when authenticated', async () => {
        const user = await User.create({
            name: 'Junior',
            email: 'gilmanjunior@gmail.com',
            password: '123123'
        });

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123123'
        });

        expect(response.body).toHaveProperty('token');
    });
});