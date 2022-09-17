import { Test, TestingModule } from '@nestjs/testing';
import { ProgramTaskService } from './program-task.service';

describe('ProgramTaskService', () => {
  let service: ProgramTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramTaskService],
    }).compile();

    service = module.get<ProgramTaskService>(ProgramTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
