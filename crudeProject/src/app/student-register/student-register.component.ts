import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private db:DbserviceService) { }
studentRegist=this.fb.group({
  name:[''],
  gender:[''],
  mob:[''],
  course:[''],
  email:['']
})
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.studentRegist.value);
    this.db.sendData(this.studentRegist.value).then((data:any)=>{
      if(data.alert==="Success"){
        alert("done")
      }
    })
  }

}
