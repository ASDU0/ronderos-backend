import {DataServicesModule} from "../../services/data-services/data-services.module";
import {Module} from "@nestjs/common";
import {ComplaintUseCase} from "./complaint.use-case";


@Module({
    imports: [DataServicesModule],
    exports: [ComplaintUseCase],
    providers: [ComplaintUseCase],
})

export class ComplaintUseCasesModule {}