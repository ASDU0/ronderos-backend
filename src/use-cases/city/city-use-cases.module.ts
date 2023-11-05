import {Module} from "@nestjs/common";
import {DataServicesModule} from "../../services/data-services/data-services.module";
import {CityUseCase} from "./city.use-case";

@Module({
    imports:[DataServicesModule],
    exports:[CityUseCase],
    providers:[CityUseCase]
})


export class  CityUseCasesModule{

}