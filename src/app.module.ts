import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
import { SubjectModule } from './subject/subject.module';
import { Subject } from './subject/subject.entity';
import { EmailModule } from './email/email.module';
import { StudentListModule } from './student-list/student-list.module';
import { StudentList } from './student-list/student-list.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'shing',
      password: '123',
      entities: [Student, Subject, StudentList],
      database: 'school',
    }),
    StudentModule,
    SubjectModule,
    EmailModule,
    ScheduleModule.forRoot(),
    StudentListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
