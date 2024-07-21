import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from "../../service/student.service";
import {Student} from "../../interface/student";
import {UpdateStudentDTO} from "../../interface/updatestudentdto";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.scss'
})
export class StudentEditComponent implements OnInit {

  student: Student = {studentId: '', studentName: '', studentEmail: '', studentBranch: ''};
  updateStudentDTO: UpdateStudentDTO = {name: '', branch: ''};

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(studentId!).subscribe(data => {
      this.student = data;
      this.updateStudentDTO.name = data.studentName;
      this.updateStudentDTO.branch = data.studentBranch;
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student.studentId, this.updateStudentDTO).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
