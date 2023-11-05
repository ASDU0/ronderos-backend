import {CityDto} from "./city.dto";
import {City} from "../entities";
import {IsString} from "class-validator";


export class NeighborhoodDto {
    @IsString()
    neighborhoodName: string;
    city: City;
}