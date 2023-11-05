import {IsString} from "class-validator";


export class CityDto{
    @IsString()
    cityName:string;
    @IsString()
    cityCode:string;
}