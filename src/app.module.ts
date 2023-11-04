import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {config} from "./config";

import {
    TestController,
    ComplaintController,
    TypeCrimeController, UserController, ObjectController
} from "./controllers";

import {DataServicesModule} from "./services/data-services/data-services.module";


import {TestUseCasesModule} from "./use-cases/test/test-use-cases.module";

import {ComplaintUseCasesModule} from "./use-cases/complaint/complaint-use-cases.module";
import {TypeCrimeUseCasesModule} from './use-cases/type-crime/type-crime.use-cases.module';
import {UserUseCasesModule} from "./use-cases/user/user.use-cases.module";
import {ObjectUseCasesModule} from "./use-cases/object/object.use-cases.module";

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
        ObjectUseCasesModule
    ],
    controllers: [
        AppController,
        TestController,
        ComplaintController,
        TypeCrimeController,
        UserController,
        ObjectController
    ],
    providers: [AppService],
})
export class AppModule {
}
