

export class User{
    username:string;
    email:string;
    gender?:string;
    socialMedia?:{
        [provider:string]:{
            id:string;
            avatar:string;
        }
    }
    password?:string;
}