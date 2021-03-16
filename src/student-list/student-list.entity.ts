import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('StudentList')
export class StudentList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: Number, nullable: false })
    @ApiProperty({ type: String, description: 'Student ID' })
    student_id: number;

    @Column({ type: String, length: 10, nullable: false })
    @ApiProperty({ type: String, description: 'Semester of Study speciy by: I for SemesterI, II for SemesterII' })
    semester: string;

    @Column({ type: String, length: 10, nullable: false })
    @ApiProperty({ type: String, description: 'Year or Study specify by: I for year1, II for year2, III for year3, IIII for year4' })
    year: string;

    @Column({ type: String, length: 20, nullable: false })
    @ApiProperty({ type: String, description: 'major name' })
    major: string;

    @Column({ type: Number, nullable: false })
    @ApiProperty({ type: String, description: 'true for absent, false for not absent' })
    absent: number;

    @Column({ type: String, length: 30, nullable: false })
    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @Column({ type: String, length: 20, nullable: false })
    created_at: string;
}