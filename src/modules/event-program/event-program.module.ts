import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventProgramService } from './Application/event-program/event-program.service';
import { EventProgramController } from './Infrastructure/Controller/event-program/event-program.controller';

@Module({  
    imports: [ClientsModule.register([
        {
          name: 'EVENTREAD',
          transport: Transport.TCP,
        },
      ])
    ],
    controllers: [EventProgramController],
    providers: [EventProgramService],
})
export class EventProgramModule {}
