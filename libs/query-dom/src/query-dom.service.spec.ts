import { Test, TestingModule } from '@nestjs/testing';
import { QueryDomService } from './query-dom.service';

describe('QueryDomService', () => {
  let service: QueryDomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryDomService],
    }).compile();

    service = module.get<QueryDomService>(QueryDomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
