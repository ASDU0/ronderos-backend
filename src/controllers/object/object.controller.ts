import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from "@nestjs/common";
import {ObjectUseCase} from "../../use-cases/object/object.use-case";
import {ObjectDto} from "../../core";

@Controller('api/object')
export class ObjectController {
    constructor(private objectUseCase: ObjectUseCase) {
    }

    @Get()
    async getObjects() {
        try {
            return await this.objectUseCase.getObjects()
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
    async createObject(@Body() object: ObjectDto) {
        try {
            return await this.objectUseCase.createObject(object)
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
    async updateObject(@Param('id') objectId: string, @Body() object: ObjectDto) {
        try {
            return await this.objectUseCase.updateObject(objectId, object)
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
    async deleteObject(@Param('id') objectId: string) {
        try {
            return await this.objectUseCase.deleteObject(objectId)
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