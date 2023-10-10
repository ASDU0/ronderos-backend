import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DATA_BASE_CONFIGURATION} from "./configuration";

async function bootstrap() {
  console.log("DATA"+DATA_BASE_CONFIGURATION.mongoConnectionString);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
