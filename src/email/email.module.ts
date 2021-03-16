/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { Module } from '@nestjs/common';
import { StudentListService } from 'src/student-list/student-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentList } from 'src/student-list/student-list.entity';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
// import { StudentService } from 'src/student/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentList])],
  providers: [EmailService, StudentListService],
  controllers: [EmailController],
})
export class EmailModule { }
