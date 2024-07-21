import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../interface/student";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(studentId: string): void {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.students = this.students.filter(student => student.studentId !== studentId);
    });
  }


}
