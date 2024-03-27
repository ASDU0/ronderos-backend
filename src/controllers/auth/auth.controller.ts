import {Controller, Get, HttpStatus, Redirect, Req, UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";


@Controller('')
export class AuthController {
    constructor() {
    }
    @Get('/facebook')
    @UseGuards(AuthGuard('facebook'))
    async facebookLogin(): Promise<any> {
        return HttpStatus.OK;
    }

    @Get('/facebook/redirect')
    @UseGuards(AuthGuard('facebook'))
    async facebookLoginRedirect(@Req() req:Request): Promise<any> {
        const {user}=<any>req
        console.log(user)
        return {
            statusCode:HttpStatus.OK,
            data:user,
        }
    }
}