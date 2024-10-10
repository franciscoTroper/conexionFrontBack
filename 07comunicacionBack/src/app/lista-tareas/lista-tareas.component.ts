import { Component, OnInit } from '@angular/core';
import { TareasService } from '../_servicio/tareas.service';
import { Tarea } from '../_modelo/tarea';


@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit {
  constructor(private servicio:TareasService){}
  ngOnInit(): void {
    this.servicio.listar()
     .subscribe(datos=>{this.tareas=datos});
     console.log("Entra");
  }
  tareas: Tarea[] = [];
}
