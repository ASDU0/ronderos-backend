import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from "@nestjs/common";
import {TypeCrimeUseCase} from "../../use-cases/type-crime/type-crime.use-case";
import { TypeCrimeDto } from "../../core/dtos/type-crime.dto";


@Controller('api/type-crime')
export class TypeCrimeController {
    constructor(private typeCrimeUseCase: TypeCrimeUseCase) {
    }

    @Get()
    async getTypeCrimes() {
        try {
            console.log("getTypeCrime")
            return await this.typeCrimeUseCase.getTypeCrimes();
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
    async createTypeCrime(@Body() typeCrime: TypeCrimeDto) {
        try {
            console.log(typeCrime)
            return await this.typeCrimeUseCase.createTypeCrime(typeCrime);
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
    async updateTypeCrime(@Param('id') typeCrimeId: string, @Body() typeCrime: TypeCrimeDto) {
        try {
            console.log("updateTypeCrime")
            return await this.typeCrimeUseCase.updateTypeCrime(typeCrimeId, typeCrime);
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
    async deleteTypeCrime(@Param('id') typeCrimeId: string) {
        try {
            return await this.typeCrimeUseCase.deleteTypeCrime(typeCrimeId);
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