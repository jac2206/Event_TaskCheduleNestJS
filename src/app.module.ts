import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventProgramModule } from './modules/event-program/event-program.module';
import { ProgramTaskModule } from './modules/program-task/program-task.module';

@Module({
  imports: [ScheduleModule.forRoot(), 
    EventEmitterModule.forRoot(), 
    // ClientsModule.register([
    //   {
    //     name: 'EVENTREAD',
    //     transport: Transport.TCP,
    //   },
    // ]),
    ProgramTaskModule, 
    EventProgramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 