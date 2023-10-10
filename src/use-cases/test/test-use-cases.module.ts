import {Module} from "@nestjs/common";
import {DataServicesModule} from "../../services/data-services/data-services.module";
import {TestUseCase} from "./test.use-case";


@Module({
    imports: [DataServicesModule],
    exports: [TestUseCase],
    providers: [TestUseCase],
})


export class TestUseCasesModule {
}