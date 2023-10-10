import { Test, TestingModule } from '@nestjs/testing';
import { MongoDataServicesService } from './mongo-data-services.service';

describe('MongoDataServicesService', () => {
  let service: MongoDataServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoDataServicesService],
    }).compile();

    service = module.get<MongoDataServicesService>(MongoDataServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
