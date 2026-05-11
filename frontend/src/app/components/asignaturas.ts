import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Asignatura } from '../models/ies.models';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reveal">
      <header style="margin-bottom: 2rem;">
        <h1>Asignaturas</h1>
        <p class="subtitle">Currículo académico y carga horaria por docente.</p>
      </header>
      
      <div class="glass-card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de la Materia</th>
              <th>Carga Horaria</th>
              <th>Profesor Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let a of asignaturas">
              <td><span class="badge badge-primary">#{{a.id}}</span></td>
              <td style="font-weight: 600; font-size: 1.1rem;">{{a.nombre}}</td>
              <td>
                <span style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid var(--border-color);">
                  ⏱️ {{a.horas}} horas/año
                </span>
              </td>
              <td>
                <div *ngIf="a.profesor; else noProf" style="display: flex; align-items: center; gap: 0.75rem;">
                   <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800;">
                    {{a.profesor.nombre.charAt(0)}}
                   </div>
                   <span>{{a.profesor.nombre}} {{a.profesor.apellidos}}</span>
                </div>
                <ng-template #noProf><span style="color: var(--text-muted); font-style: italic;">Sin asignar</span></ng-template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AsignaturasComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAsignaturas().subscribe((data: Asignatura[]) => this.asignaturas = data);
  }
}
