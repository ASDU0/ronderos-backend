import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TestController} from "./controllers";
import {DataServicesModule} from "./services/data-services/data-services.module";
import {config} from "./config";
import {ConfigModule} from "@nestjs/config";
import {TestUseCasesModule} from "./use-cases/test/test-use-cases.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          load: [config]
      }),
      DataServicesModule,
      TestUseCasesModule,
  ],
  controllers: [AppController,TestController],
  providers: [AppService],
})
export class AppModule {}
