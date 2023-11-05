import {City, IDataServices} from "../../core";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CityUseCase{
    constructor(private dataServices: IDataServices) {
    }

    getCities():Promise<City[]>{
        return this.dataServices.cities.getAll()
    }

    createCity(city:City):Promise<City>{
        return this.dataServices.cities.create(city)
    }

    updateCity(id:string,city:City):Promise<City>{
        return this.dataServices.cities.update(id,city)
    }

    deleteCity(id:string):Promise<City>{
        return this.dataServices.cities.delete(id)
    }
}
