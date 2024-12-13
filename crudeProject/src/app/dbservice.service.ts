import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http:HttpClient) { }
  sendData(data:any){
    return this.http.post("http://localhost/crude-apple/insert.php",data).toPromise();
  }
  getData(){
    return this.http.get("http://localhost/crude-apple/view.php").toPromise()
  }
  deleteItem(data:any){
    return this.http.post("http://localhost/crude-apple/delete.php",data).toPromise()
  }
  getItem(data:any){
    return  this.http.post("http://localhost/crude-apple/edit.php",data).toPromise()
  }
  updateItem(data:any){
    return this.http.post("http://localhost/crude-apple/update.php",data).toPromise();
  }
}
