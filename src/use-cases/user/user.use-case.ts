import {Injectable, UnauthorizedException} from "@nestjs/common";
import {IDataServices,User} from "../../core";
import {JwtService} from "@nestjs/jwt";



@Injectable()
export class UserUseCase {
    constructor(
        private dataServices: IDataServices,
        private jwtService: JwtService,
    ) {
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

    async login(email:string,password:string):Promise<{user:User,accessToken:string}> {
        const user = await this.dataServices.users.getFindOne({email: email})
        const {id} = <any>user
        if (!user) {
            throw new UnauthorizedException("Invalid email or password")
        }
        if (user?.password !== password) {
            throw new UnauthorizedException("Invalid email or password")
        }
        const payload = {
            sub: id,
            email: email
        }
        const accessToken = this.jwtService.sign(payload)
        return {user, accessToken}
    }

    async findOrCreate(profile): Promise<User> {
        const user = await this.dataServices.users.getFindOne({
            "socialMedia.Facebook.id": profile.id,
        });

        if (user) {
            return user;
        }
        const userSocialMedia:User={
            email: profile.emails[0].value,
            username: `${profile.name.givenName} ${profile.name.familyName}`,
            socialMedia: {
                Facebook: {
                    id: profile.id,
                    avatar: profile.photos[0].value,
                },
            },
            password: profile.id,
        }
        return this.dataServices.users.create(userSocialMedia);
    }
}