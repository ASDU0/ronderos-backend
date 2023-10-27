import {IGenericRepository} from "./generic-repository.abstract";
import {Complaint, Test} from "../entities";



export abstract class IDataServices{
    abstract tests:IGenericRepository<Test>
    abstract complaints:IGenericRepository<Complaint>
}