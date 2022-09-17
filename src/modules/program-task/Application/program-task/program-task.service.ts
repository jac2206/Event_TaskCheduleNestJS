import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProgamTask } from '../../Domain/Entities/program-task';

@Injectable()
export class ProgramTaskService {
    getString(): string{
        return 'Program task controller'
    }

    getObjectTask(): ProgamTask{
        return { 
            id:1,
            type:'Time', 
            delay: 5
        }
    }

    @Cron('* * * * * *')
    handleCron(){
        // console.log('Ejecucion tarea cada segundo')
    }

    @Cron(CronExpression.EVERY_5_SECONDS)
    handleCronParameterDefine(){
        // console.log('Ejecucion tarea cada 5 segundo')
    }   
}
