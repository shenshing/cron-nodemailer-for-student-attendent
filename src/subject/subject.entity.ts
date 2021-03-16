import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, length: 20, nullable: false })
    @ApiProperty({ type: String, description: 'major name' })
    major_name: string;

    @Column()
    @ApiProperty({ type: String, description: 'Each subject seperate by "space ," Subject1, Suejct2, Subjec3, ....' })
    subject_list: string

    @Column({ type: String, length: 15, nullable: false })
    @ApiProperty({ type: String, description: 'Semester of Study speciy by: I for SemesterI, II for SemesterII' })
    semester: string;

    @Column({ type: String, length: 10, nullable: false })
    @ApiProperty({ type: String, description: 'Year or Study specify by: I for year1, II for year2, III for year3, IIII for year4' })
    year: string;
}
