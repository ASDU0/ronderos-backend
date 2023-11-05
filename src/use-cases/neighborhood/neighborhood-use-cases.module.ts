import {Module} from "@nestjs/common";
import {IDataServices} from "../../core";
import {DataServicesModule} from "../../services/data-services/data-services.module";
import {NeighborhoodUseCase} from "./neighborhood.use-case";


@Module({
    imports:[DataServicesModule],
    exports:[NeighborhoodUseCase],
    providers:[NeighborhoodUseCase]
})

export class NeighborhoodUseCasesModule{

}