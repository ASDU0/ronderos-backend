import {DataServicesModule} from "../../services/data-services/data-services.module";
import {Module} from "@nestjs/common";
import {UserUseCase} from "./user.use-case";


@Module({
    imports:[DataServicesModule],
    exports:[UserUseCase],
    providers:[UserUseCase]
})

export class UserUseCasesModule{}