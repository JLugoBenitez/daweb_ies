import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard';
import { AlumnosComponent } from './components/alumnos';
import { ProfesoresComponent } from './components/profesores';
import { AsignaturasComponent } from './components/asignaturas';
import { MatriculasComponent } from './components/matriculas';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'matriculas', component: MatriculasComponent },
];
