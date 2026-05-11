import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Alumno, Profesor, Asignatura } from '../models/ies.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="reveal">
    <header style="margin-bottom: 3rem;">
      <h1>Vista General</h1>
      <p class="subtitle">Gestiona y visualiza el estado actual del centro educativo.</p>
    </header>

    <div class="stats-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem; margin-bottom: 3.5rem;">
      <div class="glass-card stat-card-modern">
        <div class="icon-wrap" style="background: rgba(139, 92, 246, 0.1); color: #a78bfa;">👥</div>
        <div class="stat-content">
          <p class="stat-label">Alumnos Matriculados</p>
          <h2 class="stat-number">{{alumnos.length}}</h2>
          <div class="trend-indicator up">↑ 4% este mes</div>
        </div>
      </div>

      <div class="glass-card stat-card-modern">
        <div class="icon-wrap" style="background: rgba(16, 185, 129, 0.1); color: #34d399;">👨‍🏫</div>
        <div class="stat-content">
          <p class="stat-label">Cuerpo Docente</p>
          <h2 class="stat-number">{{profesores.length}}</h2>
          <div class="trend-indicator">Estable</div>
        </div>
      </div>

      <div class="glass-card stat-card-modern">
        <div class="icon-wrap" style="background: rgba(245, 158, 11, 0.1); color: #fbbf24;">📚</div>
        <div class="stat-content">
          <p class="stat-label">Asignaturas Activas</p>
          <h2 class="stat-number">{{asignaturas.length}}</h2>
          <div class="trend-indicator up">↑ 2 nuevas</div>
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem;">
      <section class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700;">Últimas Incorporaciones</h2>
          <button class="btn-action" routerLink="/alumnos" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">Gestionar</button>
        </div>
        
        <div class="table-wrapper">
          <table *ngIf="!loading; else loader">
            <thead>
              <tr>
                <th>Alumno</th>
                <th>Identificador</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let a of alumnos.slice(0, 5)">
                <td style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--border-color); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: var(--primary);">
                    {{a.nombre.charAt(0)}}
                  </div>
                  <span>{{a.nombre}} {{a.apellidos}}</span>
                </td>
                <td><span class="badge badge-primary">{{a.ipasen}}</span></td>
                <td><span style="color: var(--secondary); font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--secondary);"></span> Activo
                </span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="glass-card" style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%);">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Soporte Directo</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Si necesitas ayuda técnica o reportar una incidencia en la plataforma, contacta con nosotros.</p>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="support-item">
            <span style="font-size: 1.2rem;">📧</span>
            <div>
              <p style="font-size: 0.85rem; font-weight: 600;">Correo Técnico</p>
              <p style="font-size: 0.8rem; color: var(--text-muted);">soporte&#64;iesalcores.es</p>
            </div>
          </div>
          <div class="support-item">
            <span style="font-size: 1.2rem;">📞</span>
            <div>
              <p style="font-size: 0.85rem; font-weight: 600;">Extensión Interna</p>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Ext. 402 (Informática)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <ng-template #loader>
    <div style="display: flex; justify-content: center; padding: 4rem;">
      <div class="premium-spinner"></div>
    </div>
  </ng-template>

  <style>
    .stat-card-modern {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.75rem !important;
    }
    .icon-wrap {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .stat-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
    .stat-number {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .trend-indicator {
      font-size: 0.75rem;
      font-weight: 700;
      margin-top: 0.5rem;
      color: var(--text-muted);
    }
    .trend-indicator.up {
      color: var(--secondary);
    }
    .support-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 16px;
      border: 1px solid var(--border-color);
    }
    .premium-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(139, 92, 246, 0.1);
      border-top: 3px solid var(--primary);
      border-radius: 50%;
      animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
  `
})
export class DashboardComponent implements OnInit {
  alumnos: Alumno[] = [];
  profesores: Profesor[] = [];
  asignaturas: Asignatura[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlumnos().subscribe((data: Alumno[]) => this.alumnos = data);
    this.apiService.getProfesores().subscribe((data: Profesor[]) => this.profesores = data);
    this.apiService.getAsignaturas().subscribe((data: Asignatura[]) => {
      this.asignaturas = data;
      this.loading = false;
    });
  }
}
