import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { TypeCrimeUseCase } from './type-crime.use-case';

@Module({
  imports: [DataServicesModule],
  exports: [TypeCrimeUseCase],
  providers: [TypeCrimeUseCase]
})
export class TypeCrimeUseCasesModule {}
