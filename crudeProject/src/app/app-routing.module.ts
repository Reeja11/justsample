import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataComponent } from './edit-data/edit-data.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [{path:"register",component:StudentRegisterComponent},
{path:'view',component:ViewStudentComponent},
{path:'edit/:id',component:EditDataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
