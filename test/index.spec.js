const request = require('supertest');
const mongoose = require('mongoose');

const express = require('express')
const app = express();

require('dotenv').config();

describe('api dogs', () => {

  describe('GET /api/breed/list/all', () => {

    // beforeAll(async () => {
    //   await mongoose.connect(process.env.MONGODB_URI)
    // })

    // afterAll(async () => {
    //   await mongoose.disconnect();
    // })

    let response;
    beforeEach(async () => {
      await mongoose.connect(process.env.MONGODB_URI);
    })
    
    afterEach(async () => {
      await mongoose.connection.close();
    })
    
    it('La ruta funciona', async () => {
      response = await request(app).get('/api/breed/list/all').send()
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    })

    it.skip('La petición nos devuelve un array', () => {
      expect(response.body).toBeInstanceOf(Array);
    })

  })

})