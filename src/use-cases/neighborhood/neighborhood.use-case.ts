import {Injectable} from "@nestjs/common";
import {IDataServices, Neighborhood} from "../../core";


@Injectable()
export class NeighborhoodUseCase {
    constructor(private dataServices:IDataServices) {
    }

    getNeighborhoods():Promise<Neighborhood[]>{
        return this.dataServices.neighborhoods.getAll()
    }

    createNeighborhood(neighborhood:Neighborhood):Promise<Neighborhood>{
        return this.dataServices.neighborhoods.create(neighborhood)
    }

    updateNeighborhood(id:string,neighborhood:Neighborhood):Promise<Neighborhood>{
        return this.dataServices.neighborhoods.update(id,neighborhood)
    }

    deleteNeighborhood(id:string):Promise<Neighborhood>{
        return this.dataServices.neighborhoods.delete(id)
    }

}