/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment/entities/payment.entity';


@Module({
  imports: [BookingModule, PaymentModule,ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.Host,
    port: parseInt(process.env.Port),
    username: process.env.DB_Username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    entities: [Payment],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
