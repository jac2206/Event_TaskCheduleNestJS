import { Module } from '@nestjs/common';
import { ProgramTaskService } from './Application/program-task/program-task.service';
import { ProgramTaskController } from './Infrastructure/Controller/program-task/program-task.controller';

@Module({
    imports: [],
    controllers: [ProgramTaskController],
    providers: [ProgramTaskService],
})
export class ProgramTaskModule {}