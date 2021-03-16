import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentListController } from './student-list.controller';
import { StudentList } from './student-list.entity';
import { StudentListService } from './student-list.service';

@Module({
    imports: [TypeOrmModule.forFeature([StudentList])],
    controllers: [StudentListController],
    providers: [StudentListService]

})
export class StudentListModule { }
