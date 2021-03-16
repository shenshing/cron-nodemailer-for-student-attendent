import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { of } from 'rxjs';
import { SubjectService } from 'src/subject/subject.service';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
        private readonly subjectService: SubjectService
    ) { }

    all(): Promise<Student[]> {
        try {
            return this.studentRepository.find();
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async create(student): Promise<any> {
        const date = new Date().toDateString();
        let detail = {
            ...student,
            created_at: date
        }
        const saveResult = await this.studentRepository.save(detail);
        if (!saveResult) throw new BadRequestException('created user failed');

        return {
            message: 'absent record saved',
            record: saveResult
        }
    }

    async studentSubjectDetail(id: number): Promise<any> {
        try {
            const student = await this.studentRepository.find({
                where: [{ 'id': id }]
            });
            const major = student[0].major;
            const semester = student[0].semester;
            const year = student[0].year;
            const subject = await this.subjectService.getSubject(major, semester, year);
            return {
                ...student[0],
                subject_list: subject[0].subject_list.split(', ')
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
