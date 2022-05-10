import { ColisInterface } from './../interfaces/colis-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }

  postColis(data : ColisInterface){
    // @ts-ignore
    return this.httpClient.get<ColisInterface[]>("http://localhost:3000/colisList").pipe(
     map( (v:ColisInterface[]) => v[v.length-1 ].id | 0 )).subscribe(
     (v:number) => {
       this.httpClient.post<ColisInterface>("http://localhost:3000/colisList", { ...data , id: v+1}).subscribe(
         v => console.log(v)
       ) 
     }
   )
   

  }

  getColis() : Observable<ColisInterface>{
    return this.httpClient.get<ColisInterface>("http://localhost:3000/colisList");
  }
}
