import { Test, TestingModule } from '@nestjs/testing';
import { EventProgramService } from './event-program.service';

describe('EventProgramService', () => {
  let service: EventProgramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventProgramService],
    }).compile();

    service = module.get<EventProgramService>(EventProgramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
