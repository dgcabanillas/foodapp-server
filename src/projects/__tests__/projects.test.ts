import supertest from 'supertest';
import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../../app'; 

describe('Projects',()=>{
    beforeAll(async() =>{
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async()=>{
        await mongoose.disconnect();
        await mongoose.connection.close();
    })

    describe('get',()=>{
        it('should return a 200', async()=>{
            await supertest(app).get('/projects').expect(401);
            
        });
    });

    describe('post',()=>{
        it('should return status 403 when no user is logged in', async()=>{
           const result=await supertest(app).post('/projects').expect(401);
           console.log(result);
               
        });
    });

});