import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { StudentList } from './student-list.entity';
import { StudentListService } from './student-list.service';

@Controller('student-list')
export class StudentListController {
    constructor(private readonly studentListService: StudentListService) { }

    @Get()
    @ApiOkResponse({ description: 'get the list of student' })
    all() {
        return this.studentListService.all();
    }

    @Get('absent')
    @ApiOkResponse({ description: 'get absent list for today. EXAMPLE DATE FORMAT: Tue Mar 16 2021' })
    responseAbsent(@Query('date') date: string) {
        return this.studentListService.getAbsentStudentByDate(date);
    }

    @Post()
    @ApiOkResponse({ description: 'Create a new record for who absent' })
    @ApiBody({ type: StudentList })
    create(@Body() studentList: StudentList) {
        return this.studentListService.create(studentList);
    }
}
