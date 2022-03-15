import supertest from 'supertest';
import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../../../app'; 

describe('Foods',()=>{
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
            const {body, statusCode}=await supertest(app)
                .get(`/foods`)
                .expect(200);
            expect(body).toEqual({data:[]});
            console.log(body);
        });
    });

    describe('post',()=>{
        it('should return status 400 when no user is logged in', async()=>{
           const result=await supertest(app).post('/foods').expect(400);
           console.log(result);
               
        });
    });

});