/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const res=await this.paymentRepository.save(createPaymentDto)
    return res;
  }

  async findAll() {
    const res=await this.paymentRepository.find()
    return res;}

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const existingPayment=await this.paymentRepository.findOneBy({id:id})
existingPayment.currency=updatePaymentDto.currency
const updatePayment=this.paymentRepository.save(existingPayment)
    return updatePayment;
  }

  async remove(id: number) {
    const  deletePayment=await this.paymentRepository.delete(id)
    return deletePayment;
  }
}
