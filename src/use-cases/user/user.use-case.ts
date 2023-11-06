import {Injectable, UnauthorizedException} from "@nestjs/common";
import {IDataServices,User} from "../../core";



@Injectable()
export class UserUseCase {
    constructor(private dataServices: IDataServices) {
    }

    getUsers():Promise<User[]>{
        return this.dataServices.users.getAll()
    }

    async createUser(user:User):Promise<User>{
        const userRecover = await this.dataServices.users.getFindOne({email:user.email})
        console.log(userRecover)
        if(userRecover){
            throw new UnauthorizedException("User already exists")
        }
        return this.dataServices.users.create(user)
    }

    updateUser(id:string,user:User):Promise<User>{
        return this.dataServices.users.update(id,user)
    }

    async login(email:string,password:string):Promise<User>{
        const user = await this.dataServices.users.getFindOne({email:email})
        if(!user){
            throw new UnauthorizedException("Invalid email or password")
        }
        if (user?.password!==password){
            throw new UnauthorizedException("Invalid email or password")
        }
        return user
    }

}