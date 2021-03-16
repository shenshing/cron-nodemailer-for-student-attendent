import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentList } from './student-list.entity';

@Injectable()
export class StudentListService {
    constructor(@InjectRepository(StudentList) private readonly studentListRepository: Repository<StudentList>) { }

    all(): Promise<StudentList[]> {
        try {
            return this.studentListRepository.find();
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async create(data): Promise<any> {
        const date = new Date().toDateString();
        let detail = {
            ...data,
            created_at: date
        }
        const saveResult = await this.studentListRepository.save(detail);
        if (!saveResult) throw new BadRequestException('created user failed');

        return {
            message: 'student list save',
            record: saveResult
        }
    }

    async getAbsentStudentByDate(date: string) {
        try {
            return await this.studentListRepository.find({
                where: [{ 'created_at': date, 'absent': true }]
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
