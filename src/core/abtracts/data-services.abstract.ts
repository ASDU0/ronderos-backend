import {IGenericRepository} from "./generic-repository.abstract";
import {City, Complaint, Objects, Test, TypeCrime, User} from "../entities";



export abstract class IDataServices{
    abstract tests:IGenericRepository<Test>
    abstract complaints:IGenericRepository<Complaint>
    abstract typeCrimes:IGenericRepository<TypeCrime>
    abstract users:IGenericRepository<User>
    abstract objects:IGenericRepository<Objects>
    abstract cities:IGenericRepository<City>
}