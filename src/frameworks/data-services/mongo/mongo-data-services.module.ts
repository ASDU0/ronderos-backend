import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigService} from "@nestjs/config";
import {Test, TestSchema} from "./model";
import {IDataServices} from "../../../core";
import {MongoDataServices} from "./mongo-data-services.service";


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Test.name, schema: TestSchema}
        ]),
      MongooseModule.forRootAsync({
          imports: [],
          inject:[ConfigService],
            useFactory: (configService: ConfigService) => ({
                uri: configService.get('mongoConnectionString'),
            })
      }),
    ],
    providers: [{
        provide: IDataServices,
        useClass: MongoDataServices
    }],
    exports: [IDataServices]
})

export class MongoDataServicesModule {

}