/* eslint-disable prettier/prettier */
import { Body, Controller, Get,  Post, Req, Res } from '@nestjs/common';
// import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/Hello")
  getHello(): string {
    return this.appService.getHello();
  }
  /*
  @Post("/Hello")
  postHello(@Query('name')query): string {
    return query
    return this.appService.sendWelcome();
  }
  @Post("/Hello/:name")
  postHello(@Param('name')params): string {
    return params
    return this.appService.sendWelcome();
  }
 
  @Post("/Hello")
  postHello(@Body('name')name: string) {
    return this.appService.sendWelcome(name);
  }
   */
  @Post("/Hello")
  postHello(@Body('name')name: string, @Req()req ,@Res() res) {
    // return this.appService.sendWelcome(name); // doesn't work
    res.send('welcome'+name)
  }
}
