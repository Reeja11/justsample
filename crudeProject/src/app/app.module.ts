import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';
import { EditDataComponent } from './edit-data/edit-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    ViewStudentComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
