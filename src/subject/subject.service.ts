import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
    constructor(@InjectRepository(Subject) private readonly subjectRepository: Repository<Subject>) { }

    all(): Promise<Subject[]> {
        try {
            return this.subjectRepository.find();
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async create(subject: Subject): Promise<any> {
        const saveResult = await this.subjectRepository.save(subject);
        if (!saveResult) throw new BadRequestException('created user failed');
        return {
            message: 'subject saved',
            record: saveResult
        }
    }

    getSubject(major: string, semester: string, year: string) {
        try {
            return this.subjectRepository.find({
                where: [{ "major_name": major, "semester": semester, "year": year }]
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
