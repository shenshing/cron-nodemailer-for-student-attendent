import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private subjectService: SubjectService) { }

    @Get()
    @ApiOkResponse({ description: 'Return existing Subject' })
    all(): Promise<Subject[]> {
        return this.subjectService.all();
    }

    @Get('subjects')
    @ApiOkResponse({ description: 'Return subject by Year, Semester, Major' })
    getSubjectByYearSemester(@Query('year') year: string, @Query('semester') semester: string, @Query('major') major: string) {
        return this.subjectService.getSubject(major, semester, year);
    }

    @Post()
    @ApiCreatedResponse({ description: 'Create new subject' })
    @ApiBody({ type: Subject })
    create(@Body() subject: Subject): Promise<Subject> {
        return this.subjectService.create(subject);
    }


}
