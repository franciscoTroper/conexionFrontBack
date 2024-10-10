import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../_servicio/empresa.service';
import { Empresa } from '../_modelo/empresa';

@Component({
  selector: 'app-lista-empresas',
  standalone: true,
  imports: [],
  templateUrl: './lista-empresas.component.html',
  styleUrl: './lista-empresas.component.css'
})
export class ListaEmpresasComponent implements OnInit {
  constructor(private servicio: EmpresaService){}
  
  empresas: Empresa[] = [];
  ngOnInit(): void {
    this.servicio.listar()
    .subscribe(datos=>{this.empresas=datos});
    console.log("Entra");
  }

  


}
