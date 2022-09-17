import { Test, TestingModule } from '@nestjs/testing';
import { ProgramTaskController } from './program-task.controller';

describe('ProgramTaskController', () => {
  let controller: ProgramTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramTaskController],
    }).compile();

    controller = module.get<ProgramTaskController>(ProgramTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
