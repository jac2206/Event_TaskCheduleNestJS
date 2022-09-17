import { Controller, Get } from '@nestjs/common';
import { ProgramTaskService } from 'src/modules/program-task/Application/program-task/program-task.service';

@Controller('programtask')
export class ProgramTaskController {
    constructor(private readonly programTaskService: ProgramTaskService) {}

    @Get() 
    getObjectTask():string{
        return this.programTaskService.getString();
    }

    @Get('route') 
    getObjectTaskRouter():object{
        return this.programTaskService.getObjectTask();
    }
}
