import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {config} from "./config";

import {
    TestController,
    ComplaintController,
    TypeCrimeController,
    UserController,
    ObjectController,
    CityController,
    NeighborhoodController,
    AuthController,
} from "./controllers";

import {DataServicesModule} from "./services/data-services/data-services.module";


import {TestUseCasesModule} from "./use-cases/test/test-use-cases.module";

import {ComplaintUseCasesModule} from "./use-cases/complaint/complaint-use-cases.module";
import {TypeCrimeUseCasesModule} from './use-cases/type-crime/type-crime-use-cases.module';
import {UserUseCasesModule} from "./use-cases/user/user-use-cases.module";
import {ObjectUseCasesModule} from "./use-cases/object/object.use-cases.module";
import {CityUseCasesModule} from "./use-cases/city/city-use-cases.module";
import {NeighborhoodUseCasesModule} from "./use-cases/neighborhood/neighborhood-use-cases.module";
import {FacebookStrategy} from "./controllers/auth/facebook.strategy";
import {JwtModule} from "@nestjs/jwt";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        }),
        DataServicesModule,
        UserUseCasesModule,
        TestUseCasesModule,
        ComplaintUseCasesModule,
        TypeCrimeUseCasesModule,
        ObjectUseCasesModule,
        CityUseCasesModule,
        NeighborhoodUseCasesModule,
        JwtModule.register({
            global: true,
            secret: "secretKey",
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [
        AppController,
        TestController,
        ComplaintController,
        TypeCrimeController,
        UserController,
        ObjectController,
        CityController,
        NeighborhoodController,
        AuthController,
    ],
    providers: [AppService,FacebookStrategy],
})
export class AppModule {
}
