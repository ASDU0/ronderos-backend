import {Injectable} from "@nestjs/common";
import {IDataServices, Objects} from "../../core";


@Injectable()
export class ObjectUseCase {
    constructor(private dataServices: IDataServices) {
    }

    getObjects():Promise<Objects[]>{
        return this.dataServices.objects.getAll()
    }

    createObject(object:Objects):Promise<Objects>{
        return this.dataServices.objects.create(object)
    }

    updateObject(id:string,object:Objects):Promise<Objects>{
        return this.dataServices.objects.update(id,object)
    }

    deleteObject(id:string):Promise<Objects>{
        return this.dataServices.objects.delete(id)
    }
}