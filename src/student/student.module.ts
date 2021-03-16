import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Subject } from '../subject/subject.entity';
import { SubjectService } from '../subject/subject.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Student]),
        TypeOrmModule.forFeature([Subject]),
    ],
    controllers: [StudentController],
    providers: [StudentService, SubjectService]
})

export class StudentModule { }
