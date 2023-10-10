import {Injectable, Module} from "@nestjs/common";
import {IDataServices, Test} from "../../core";


@Injectable()
export class TestUseCase {
    constructor(
        private dataServices:IDataServices,
    ) {
    }

    getTests():Promise<Test[]> {
        return this.dataServices.tests.getAll();
    }
    createTest(test:Test):Promise<Test> {
        return this.dataServices.tests.create(test);
    }
}