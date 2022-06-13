const app = require('../src/app');
const request = require('supertest');

describe('GET /users', () => {

    test('respond with a 401 status code', async () => {
        const response = await request(app).get("/user").send();
        expect(response.statusCode).toBe(401);
    });

});