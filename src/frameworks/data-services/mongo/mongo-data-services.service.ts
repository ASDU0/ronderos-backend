import {Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {IDataServices} from "../../../core";
import {MongoGenericRepository} from "./mongo-generic-repository";
import {Test, TestDocument} from "./model";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Complaint} from "./model/complaint.model";

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    tests: MongoGenericRepository<Test>;
    complaints: MongoGenericRepository<Complaint>;

    constructor(
        @InjectModel(Test.name)
        private TestRepository: Model<TestDocument>,
        @InjectModel(Complaint.name)
        private ComplaintRepository: Model<Complaint>
    ) {
    }

    onApplicationBootstrap(): any {
        this.tests = new MongoGenericRepository<Test>(this.TestRepository,);
        this.complaints = new MongoGenericRepository<Complaint>(this.ComplaintRepository,);
    }

}
