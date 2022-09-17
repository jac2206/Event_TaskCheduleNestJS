import { Test, TestingModule } from '@nestjs/testing';
import { EventProgramController } from './event-program.controller';

describe('EventProgramController', () => {
  let controller: EventProgramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventProgramController],
    }).compile();

    controller = module.get<EventProgramController>(EventProgramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
