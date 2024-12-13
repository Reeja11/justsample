import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
public studid=-1;
dataarray:any;
studentRegist!:FormGroup
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private db:DbserviceService,private router:Router) {
    this.route.params.subscribe(sid=>(this.studid=sid['id']))
    console.log(this.studid)
   }

  ngOnInit(): void {
    this.studentRegist=this.fb.group({
      id:[''],
      name:[''],
      gender:[''],
      mobile:[''],
      course:[''],
      email:['']
    })
    this.db.getItem({studid:this.studid}).then((data:any)=>{
      this.dataarray=data.data[0];
      this.studentRegist.patchValue(this.dataarray);
    })
  }
  onEdit(){
    this.db.updateItem(this.studentRegist.value).then((data:any)=>{
      if (data.alert === "Success") {
        alert('Updated')
        this.router.navigate(['/view'])
      }
    })
  }

}
