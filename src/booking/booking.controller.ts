/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';

@Controller('booking')
export class BookingController {
    @Post('/reserve')
    reserve():string
    {
        return 'reserve'
    }
}
