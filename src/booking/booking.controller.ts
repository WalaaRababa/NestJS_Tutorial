/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
    constructor(private bookingService:BookingService){}
    @Post('/reserve')
    reserve():string
    {
        return this.bookingService.reserve()
    }
}
