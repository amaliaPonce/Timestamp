import chai from "chai"; chai.should();
import request from 'supertest';
import app from '../index.js';

describe('GET /api', () => {
  it('should return current timestamp', async () => {
    const res = await request(app).get('/api');
    res.status.should.equal(200);
    res.body.should.have.property('unix');
    res.body.should.have.property('utc');
  });

  it('should return timestamp for valid date', async () => {
    const res = await request(app).get('/api/2015-12-25');
    res.status.should.equal(200);
    res.body.unix.should.equal(new Date('2015-12-25').getTime());
  });

  it('should return error for invalid date', async () => {
    const res = await request(app).get('/api/invalid-date');
    res.status.should.equal(200);
    res.body.should.have.property('error');
  });
});
