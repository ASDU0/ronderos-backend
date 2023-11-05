import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigService} from "@nestjs/config";
import {
    Test,
    TestSchema,
    Complaint,
    ComplaintSchema,
    User,
    UserSchema,
    Objects,
    ObjectsSchema,
    TypeCrime,
    TypeCrimeSchema, City, CitySchema
} from "./model";
import {IDataServices} from "../../../core";
import {MongoDataServices} from "./mongo-data-services.service";



@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Complaint.name, schema: ComplaintSchema},
            {name: Test.name, schema: TestSchema},
            {name: TypeCrime.name, schema: TypeCrimeSchema},
            {name: User.name, schema: UserSchema},
            {name: Objects.name, schema: ObjectsSchema},
            {name: City.name,schema:CitySchema},
        ]),
        MongooseModule.forRootAsync({
            imports: [],
            inject: [ConfigService],
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