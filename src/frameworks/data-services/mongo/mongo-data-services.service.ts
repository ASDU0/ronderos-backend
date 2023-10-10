import {Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {IDataServices} from "../../../core";
import {MongoGenericRepository} from "./mongo-generic-repository";
import {Test, TestDocument} from "./model";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class MongoDataServices implements IDataServices,OnApplicationBootstrap{
    tests:MongoGenericRepository<Test>;
    constructor(
        @InjectModel(Test.name)
        private TestRepository:Model<TestDocument>
    ) {

    }
    onApplicationBootstrap(): any {
        this.tests = new MongoGenericRepository<Test>(this.TestRepository,);
    }

}
