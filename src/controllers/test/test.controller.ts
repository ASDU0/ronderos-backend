import {Controller, Post} from '@nestjs/common';
import {TestUseCase} from "../../use-cases/test/test.use-case";

@Controller('test')
export class TestController {
    constructor(private testUseCase: TestUseCase) {
    }

    @Post()
    async createTest() {
        return await this.testUseCase.createTest({
            id: "1",
            name: "test",
            age: 1,
        });
    }
}
