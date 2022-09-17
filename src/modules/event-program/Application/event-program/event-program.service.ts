import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EventProgramService {
    constructor(private eventEmitter: EventEmitter2,
        @Inject('EVENTREAD') private readonly eventReadClient: ClientProxy,
        ){}
    
    getStringController(): string{
        return 'event program controller';
    }

    emitEvent() {
        this.eventReadClient.emit('msg.sent', 'Hello World');
        this.eventEmitter.emit('msg.sent', 'Hello World');
    }

    @OnEvent('msg.sent')
    listentToEvent(msg: string) {
        console.log('Message Received: ', msg);
    }
}
