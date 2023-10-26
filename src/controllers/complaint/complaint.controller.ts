import {Controller, Get, HttpException} from "@nestjs/common";
import {ComplaintUseCase} from "../../use-cases/complaint/complaint.use-case";


@Controller('complaint')
export class AppController {
    constructor(private complaintUseCase: ComplaintUseCase) {
    }

    @Get()
    async getComplaints() {
        try{
            await this.complaintUseCase.getComplaints();
        }catch(error){
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500,{
                cause:error,
            })
        }

    }


}