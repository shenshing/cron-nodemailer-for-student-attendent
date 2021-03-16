import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn()
    id: string;

    @Column({ type: String, length: 30, nullable: false })
    @ApiProperty({ type: String, description: 'student name' })
    name: string;

    @Column({ type: String, length: 20, nullable: false })
    @ApiProperty({ type: String, description: 'school major' })
    major: string;

    @Column({ type: String, length: 10, nullable: false })
    @ApiProperty({ type: String, description: 'Year or Study specify by: I for year1, II for year2, III for year3, IIII for year4' })
    year: string;

    @Column({ type: String, length: 15, nullable: false })
    @ApiProperty({ type: String, description: 'Semester of Study speciy by: I for SemesterI, II for SemesterII' })
    semester: string;

    @Column({ type: String, length: 30, nullable: false })
    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @Column({ type: String, length: 20, nullable: false })
    created_at: string;
}