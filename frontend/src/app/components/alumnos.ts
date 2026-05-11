import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Alumno } from '../models/ies.models';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reveal">
      <header style="margin-bottom: 2rem;">
        <h1>Expedientes de Alumnos</h1>
        <p class="subtitle">Base de datos central de estudiantes matriculados.</p>
      </header>
      
      <div class="glass-card table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Usuario iPasen</th>
              <th>Estado Académico</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let a of alumnos">
              <td><span class="badge badge-primary">#{{a.id}}</span></td>
              <td style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white;">
                  {{a.nombre.charAt(0)}}
                </div>
                <div>
                  <p style="font-weight: 600; font-size: 0.95rem;">{{a.nombre}} {{a.apellidos}}</p>
                  <p style="font-size: 0.75rem; color: var(--text-muted);">Estudiante Activo</p>
                </div>
              </td>
              <td><code>{{a.ipasen}}</code></td>
              <td><span style="color: var(--secondary); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--secondary);"></span> Regular
              </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlumnos().subscribe((data: Alumno[]) => this.alumnos = data);
  }
}
