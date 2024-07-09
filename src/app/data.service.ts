import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient){

  }
  ngOnInit():void{
    this.getMethod();
    this.postMethod();
    this.deleteMethod();
    this.putMethod()

  }

  public getMethod(){
    this.http.get('localhost:8080/api/allwarranties').subscribe((data)=>{
      console.log(data);
    });
  }

  public postMethod(){
    this.http.post('localhost:8080/api/warranties/add',{}).subscribe((data)=>{
      console.log(data);
    });
  }
  

  public deleteMethod(){
    this.http.delete('localhost:8080/api/warranties/remove/{id}').subscribe((data)=>{
      console.log(data);
    });
  }

  public putMethod(){
    this.http.put('localhost:8080/api/warranties/update/{id}',{}).subscribe((data)=>{
      console.log(data);
    });
  }

  
}


