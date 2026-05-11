import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Profesor } from '../models/ies.models';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reveal">
      <header style="margin-bottom: 2rem;">
        <h1>Listado de Profesores</h1>
        <p class="subtitle">Personal docente especializado del centro.</p>
      </header>
      
      <div class="glass-card table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of profesores">
              <td>#{{p.id}}</td>
              <td>{{p.nombre}}</td>
              <td>{{p.apellidos}}</td>
              <td><code>{{p.especialidad}}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ProfesoresComponent implements OnInit {
  profesores: Profesor[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.apiService.getProfesores().subscribe((data: Profesor[]) => this.profesores = data);
  }
}
