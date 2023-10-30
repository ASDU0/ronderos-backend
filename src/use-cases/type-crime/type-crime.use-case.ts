import {Injectable} from "@nestjs/common";
import {IDataServices, TypeCrime} from "../../core";

@Injectable()
export class TypeCrimeUseCase {
    constructor(
        private dataServices: IDataServices,
    ) {}

    getTypeCrimes(): Promise<TypeCrime[]> {
        return this.dataServices.typeCrimes.getAll();
    }

    createTypeCrime(typeCrime: TypeCrime): Promise<TypeCrime> {
        return this.dataServices.typeCrimes.create(typeCrime);
    }

    updateTypeCrime(id: string, typeCrime: TypeCrime): Promise<TypeCrime> {
        return this.dataServices.typeCrimes.update(id, typeCrime);
    }

    deleteTypeCrime(id: string): Promise<TypeCrime> {
        return this.dataServices.typeCrimes.delete(id);
    }

}