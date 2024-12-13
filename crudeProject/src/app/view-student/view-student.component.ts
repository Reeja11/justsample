import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
  dataarray:any[]=[]
  constructor(private db:DbserviceService) { }

  ngOnInit(): void {
    this.db.getData().then((data:any)=>{
      this.dataarray=data
    })
  }
  onDelete(id:any){
    this.db.deleteItem({id}).then((data:any)=>{
  if(data.alert === 'Success'){
    alert("deleted");
    window.location.reload();
  }
    })
  }

}
