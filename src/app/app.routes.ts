import { Routes } from '@angular/router';
import {StudentEditComponent} from "./components/student-edit/student-edit.component";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {StudentCreateComponent} from "./components/student-create/student-create.component";

export const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: StudentCreateComponent},
  {path: 'edit/:id', component: StudentEditComponent}
];
