import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from "./config";

import {
  TestController,
  ComplaintController,
  TypeCrimeController
} from "./controllers";

import {DataServicesModule} from "./services/data-services/data-services.module";


import {TestUseCasesModule} from "./use-cases/test/test-use-cases.module";

import {ComplaintUseCasesModule} from "./use-cases/complaint/complaint-use-cases.module";
import { TypeCrimeUseCasesModule } from './use-cases/type-crime/type-crime.use-cases.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          load: [config]
      }),
      DataServicesModule,
      TestUseCasesModule,
      ComplaintUseCasesModule,
      TypeCrimeUseCasesModule
  ],
  controllers: [AppController, TestController, ComplaintController, TypeCrimeController],
  providers: [AppService],
})
export class AppModule {}
