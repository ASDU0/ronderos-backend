import {Module} from "@nestjs/common";
import {DataServicesModule} from "../../services/data-services/data-services.module";
import {ObjectUseCase} from "./object.use-case";


@Module({
    imports:[DataServicesModule],
    exports:[ObjectUseCase],
    providers:[ObjectUseCase]
})

export class ObjectUseCasesModule{}