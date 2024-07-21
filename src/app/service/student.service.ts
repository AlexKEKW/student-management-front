import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from "../interface/student";
import {CreateStudentDTO} from "../interface/createstudentdto";
import {UpdateStudentDTO} from "../interface/updatestudentdto";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl: string = 'http://localhost:8080/v1/students';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(studentId: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${studentId}`);
  }

  createStudent(student: CreateStudentDTO): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(studentId: string, student: UpdateStudentDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${studentId}`, student);
  }

  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${studentId}`);
  }

}
