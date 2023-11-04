import {Injectable} from "@nestjs/common";
import {IDataServices,User} from "../../core";



@Injectable()
export class UserUseCase {
    constructor(private dataServices: IDataServices) {
    }

    getUsers():Promise<User[]>{
        return this.dataServices.users.getAll()
    }

    createUser(user:User):Promise<User>{
        return this.dataServices.users.create(user)
    }

    updateUser(id:string,user:User):Promise<User>{
        return this.dataServices.users.update(id,user)
    }

    // deleteUser(id)

}