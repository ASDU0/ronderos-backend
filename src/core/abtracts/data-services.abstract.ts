import {IGenericRepository} from "./generic-repository.abstract";
import {Test} from "../entities";


export abstract class IDataServices{
    abstract tests:IGenericRepository<Test>
}