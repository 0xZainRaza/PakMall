const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('Basic Site Status Check', () => {
  test('should return 200 OK on the home route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});


  describe('Basic Login Page Status Check', () => {
    test('should return 200 OK on the home route', async () => {
      const response = await request(app).get('/auth/login');
      expect(response.status).toBe(200);
    });
  });


  describe('Basic Signup Page Status Check', () => {
    test('should return 200 OK on the home route', async () => {
      const response = await request(app).get('/auth/signup');
      expect(response.status).toBe(200);
    });
  });


  