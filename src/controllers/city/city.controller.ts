import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from "@nestjs/common";
import {CityUseCase} from "../../use-cases/city/city.use-case";
import {City, CityDto} from "../../core";

@Controller('api/city')
export class CityController {

    constructor(private cityUseCase: CityUseCase) {
    }


    @Get()
    async getCities() {
        try {
            return await this.cityUseCase.getCities()
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }

    @Post()
    async createCity(@Body() city: CityDto) {
        try {
            return await this.cityUseCase.createCity(city)
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }

    @Put(':id')
    async updateCity(@Param('id') cityId: string, @Body() city: CityDto) {
        try {
            return await this.cityUseCase.updateCity(cityId, city)
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }

    @Delete(':id')
    async deleteCity(@Param('id') cityId: string) {
        try {
            return await this.cityUseCase.deleteCity(cityId)
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }
}