import {IGenericRepository} from "../../../core";
import {Model} from "mongoose";


export class MongoGenericRepository<T> implements IGenericRepository<T>{
    private _repository:Model<T>;
    private _populateOnFind:string[];
    constructor(repository:Model<T>,populateOnFind:string[]=[]){
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }
    create(item: T): Promise<T> {
        return this._repository.create(item);
    }

    delete(id: string): Promise<T> {
        return this._repository.findByIdAndDelete(id).exec();
    }

    getAll(): Promise<T[]> {
        return this._repository.find().populate(this._populateOnFind).exec();
    }

    getAllUsers(): Promise<T[]> {
        return this._repository.find().populate(["object","typeCrime","user"]).exec();
    }

    getById(id: any): Promise<T> {
        return this._repository.findById(id).populate.apply(this._populateOnFind).exec();
    }

    update(id: string, item: T): Promise<T> {
        return this._repository.findByIdAndUpdate(id,item).exec();
    }

    getFindOne(query:any):Promise<T>{
        return this._repository.findOne(query).exec();
    }

}