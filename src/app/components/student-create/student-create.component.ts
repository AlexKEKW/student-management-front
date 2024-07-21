import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from "../../service/student.service";
import {CreateStudentDTO} from "../../interface/createstudentdto";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.scss'
})
export class StudentCreateComponent {

  createStudentDTO: CreateStudentDTO = {name: '', email: '', branch: ''};

  constructor(private studentService: StudentService, private router: Router) {
  }

  createStudent(): void {
    this.studentService.createStudent(this.createStudentDTO).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
