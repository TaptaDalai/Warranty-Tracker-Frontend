import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarrantyData } from './warranty-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id!:String;

  constructor(private http : HttpClient){

  }
  ngOnInit():void{


  }

  public getMethod(){
    this.http.get('localhost:8080/api/allwarranties').subscribe((data)=>{
      console.log(data);
    });
  }

  public postMethod(warrantyData:WarrantyData):Observable<WarrantyData>{
    return this.http.post<WarrantyData>('localhost:8080/api/warranties/add',warrantyData)
    };
  
  

  deleteMethod(id:String){
    return this.http.delete(`localhost:8080/api/warranties/remove/${id}`)
  };
  

  public putMethod(){
    this.http.put('localhost:8080/api/warranties/update/{id}',{})
  };

  


}
