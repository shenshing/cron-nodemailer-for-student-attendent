import { Body, Controller, Get, Param, Post, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    @ApiOkResponse({ description: 'Return the list of Student' })
    all() {
        return this.studentService.all();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Get a single user by ID' })
    async findOne(@Param('id') id: number) {
        return this.studentService.studentSubjectDetail(id);
    }

    @Post()
    @ApiCreatedResponse({ description: 'Insert new User to the List' })
    @ApiBody({ type: Student })
    create(@Body() student: Student): Promise<Student> {
        return this.studentService.create(student);
    }
}
