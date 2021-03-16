import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import { StudentListService } from 'src/student-list/student-list.service';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class EmailService {
    constructor(private readonly studentListService: StudentListService) { }
    private readonly logger = new Logger();

    @Cron('* * * * * *')
    // @Cron('30 18 * * 1-5')
    async sendMail() {
        // console.log(process.env.EMAIL_SERVICE);
        const today = new Date().toDateString();
        const absentStudent = await this.studentListService.getAbsentStudentByDate(today);
        let transporter = nodemailer.createTransport(smtpTransport({
            // service: 'gmail',
            service: process.env.EMAIL_SERVICE,
            host: process.env.HOST,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        }));

        if (absentStudent.length === 0) {
            return 'no absent student for today';
        } else {
            absentStudent.forEach(student => {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: student.email,
                    subject: 'Absent Alert',
                    text: `StudentID: ${student.student_id} \n Major: ${student.major}\nSemester:${student.semester}\nYear:${student.year}\nDate:${student.created_at}`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        // console.log(error);
                        this.logger.debug(error.message);
                    } else {
                        // console.log('Email send: ' + info.response);
                        this.logger.debug('Email send: ' + info.response);
                    }
                })
            });
        }


    }
}
// export default EmailService;