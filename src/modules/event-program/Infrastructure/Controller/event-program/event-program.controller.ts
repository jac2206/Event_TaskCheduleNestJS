import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EventProgramService } from 'src/modules/event-program/Application/event-program/event-program.service';

@Controller('eventprogram')
export class EventProgramController {
    constructor(private readonly eventProgramService: EventProgramService) {}

    @Get() 
    async getObjectTask():Promise<string>{
        this.eventProgramService.emitEvent();
        return this.eventProgramService.getStringController();
    }

    // @Post()
    // create(@Body() createOrderDto: CreateOrderDto) {
    //   return this.ordersService.create(createOrderDto);
    // }

    @EventPattern('user_created')
    async handleUserCreated(data: Record<string, unknown>) {
    // business logic
    }
}
