import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from "@nestjs/common";
import {ComplaintUseCase} from "../../use-cases/complaint/complaint.use-case";
import {ComplaintDto} from "../../core/dtos/complaint.dto";


@Controller('api/complaint')
export class ComplaintController {
    constructor(private complaintUseCase: ComplaintUseCase) {
    }

    @Get()
    async getComplaints() {
        try {
            console.log("getComplaints")
            return await this.complaintUseCase.getComplaints();
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
    async createComplaint(@Body() complaint: ComplaintDto) {
        try {
            console.log(complaint)
            return await this.complaintUseCase.createComplaint(complaint);
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
    async updateComplaint(@Param('id') complaintId: string, @Body() complaint: ComplaintDto) {
        try {
            console.log("updateComplaint")
            return await this.complaintUseCase.updateComplaint(complaintId, complaint);
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
    async deleteComplaint(@Param('id') complaintId: string) {
        try {
            return await this.complaintUseCase.deleteComplaint(complaintId);
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