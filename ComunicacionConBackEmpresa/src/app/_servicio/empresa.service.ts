import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../_modelo/empresa';
import { entorno } from '../_entorno/entorno';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/empresa`;

  listar():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url);
  }
}
