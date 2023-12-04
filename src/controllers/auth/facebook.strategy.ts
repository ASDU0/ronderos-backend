import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-facebook";
import {UserUseCase} from "../../use-cases/user/user.use-case";


@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(
        private userUseCase: UserUseCase,
    ) {
        super({
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: 'http://localhost:3001/facebook/redirect',
            scope: ['email'],
            profileFields: ['emails', 'name','photos']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
        const {name, emails} = profile;
        const user = await this.userUseCase.findOrCreate(profile);

        const payload = {
            user,
            accessToken,
        }
        done(null, payload);
    }
}