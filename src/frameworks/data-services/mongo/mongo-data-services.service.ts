import {Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {IDataServices} from "../../../core";
import {MongoGenericRepository} from "./mongo-generic-repository";
import {
    Test,
    TestDocument,
    Complaint,
    ComplaintDocument,
    User,
    UserDocument,
    Objects,
    typeCrimeDocument, ObjectsDocument, TypeCrime
} from "./model";
import {InjectModel} from "@nestjs/mongoose";

import {Model} from "mongoose";


@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    tests: MongoGenericRepository<Test>;
    complaints: MongoGenericRepository<Complaint>;
    users: MongoGenericRepository<User>;
    typeCrimes: MongoGenericRepository<TypeCrime>;
    objects: MongoGenericRepository<Objects>

    constructor(
        @InjectModel(Test.name)
        private TestRepository: Model<TestDocument>,
        @InjectModel(Complaint.name)
        private ComplaintRepository: Model<ComplaintDocument>,
        @InjectModel(User.name)
        private UserRepository: Model<UserDocument>,
        @InjectModel(TypeCrime.name)
        private TypeCrimeRepository: Model<typeCrimeDocument>,
        @InjectModel(Objects.name)
        private ObjectRepository: Model<ObjectsDocument>
    ) {
    }

    onApplicationBootstrap(): any {
        this.tests = new MongoGenericRepository<Test>(this.TestRepository);
        this.complaints = new MongoGenericRepository<Complaint>(this.ComplaintRepository);
        this.users = new MongoGenericRepository<User>(this.UserRepository);
        this.typeCrimes = new MongoGenericRepository<TypeCrime>(this.TypeCrimeRepository,);
        this.objects = new MongoGenericRepository<Objects>(this.ObjectRepository);
    }

}
