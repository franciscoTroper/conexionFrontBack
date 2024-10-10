import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../_modelo/tarea';
import { entorno } from '../_entorno/entorno';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http:HttpClient) {}
  private url:string=`${entorno.HOST}/tarea`;


  listar():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.url);
  }
}
