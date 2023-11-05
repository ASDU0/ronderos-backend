import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from "@nestjs/common";
import {NeighborhoodUseCase} from "../../use-cases/neighborhood/neighborhood.use-case";
import {NeighborhoodDto} from "../../core";


@Controller('api/neighborhood')
export class NeighborhoodController {
    constructor(private neighborhoodUseCase: NeighborhoodUseCase) {
    }

    @Get()
    async getNeighborhoods() {
        try {
            console.log("getNeighborhoods")
            return await this.neighborhoodUseCase.getNeighborhoods();
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
    async createNeighborhood(@Body() neighborhood: NeighborhoodDto) {
        try {
            console.log("createNeighborhood")
            return await this.neighborhoodUseCase.createNeighborhood(neighborhood);
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
    async updateNeighborhood(@Param('id') neighborhoodId: string, @Body() neighborhood: NeighborhoodDto) {
        try {
            console.log("updateNeighborhood")
            return await this.neighborhoodUseCase.updateNeighborhood(neighborhoodId, neighborhood);
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
    async deleteNeighborhood(@Param('id') neighborhoodId: string) {
        try {
            console.log("deleteNeighborhood")
            return await this.neighborhoodUseCase.deleteNeighborhood(neighborhoodId);
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