import {Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {IDataServices} from "../../../core";
import {MongoGenericRepository} from "./mongo-generic-repository";
import {Test, TestDocument} from "./model";
import {InjectModel} from "@nestjs/mongoose";

import {Model} from "mongoose";

import {Complaint} from "./model/complaint.model";
import {TypeCrime} from './model/type-crime.model';

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    tests: MongoGenericRepository<Test>;
    complaints: MongoGenericRepository<Complaint>;
    typeCrimes: MongoGenericRepository<TypeCrime>;

    constructor(
        @InjectModel(Test.name)
        private TestRepository: Model<TestDocument>,
        @InjectModel(Complaint.name)
        private ComplaintRepository: Model<Complaint>,
        @InjectModel(TypeCrime.name)
        private TypeCrimeRepository: Model<TypeCrime>,
    ) {
    }

    onApplicationBootstrap(): any {
        this.tests = new MongoGenericRepository<Test>(this.TestRepository,);
        this.complaints = new MongoGenericRepository<Complaint>(this.ComplaintRepository,);
        this.typeCrimes = new MongoGenericRepository<TypeCrime>(this.TypeCrimeRepository,);
    }

}
