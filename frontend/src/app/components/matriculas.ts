import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Matricula } from '../models/ies.models';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reveal">
      <header style="margin-bottom: 2rem;">
        <h1>Gestión de Matrículas</h1>
        <p class="subtitle">Listado detallado de inscripciones académicas.</p>
      </header>
      
      <div class="glass-card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID Mat.</th>
              <th>Alumno</th>
              <th>Asignatura</th>
              <th>Curso</th>
              <th>Nota Media</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let m of matriculas">
              <td><span class="badge badge-primary">#{{m.idMat}}</span></td>
              <td style="font-weight: 600;">{{m.alumno?.nombre}} {{m.alumno?.apellidos}}</td>
              <td>{{m.asignatura?.nombre}}</td>
              <td>{{m.curso}}º</td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                   <div style="width: 100%; max-width: 60px; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                      <div [style.width]="(m.notaMedia * 10) + '%'" 
                           [style.background]="m.notaMedia >= 5 ? 'var(--secondary)' : '#ef4444'" 
                           style="height: 100%;"></div>
                   </div>
                   <span style="font-size: 0.85rem; font-weight: 700;">{{m.notaMedia}}</span>
                </div>
              </td>
              <td><span [style.color]="m.notaMedia >= 5 ? 'var(--secondary)' : '#f87171'">{{m.notaMedia >= 5 ? 'Aprobado' : 'Suspenso'}}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class MatriculasComponent implements OnInit {
  matriculas: Matricula[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMatriculas().subscribe((data: Matricula[]) => this.matriculas = data);
  }
}
