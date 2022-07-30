import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'nuevaeduc', component: NewEducacionComponent},
  {path: 'nuevahab', component: NewHabilidadComponent},
  {path: 'nuevopro', component: NewProyectoComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'editeduc/:id', component: EditEducacionComponent},
  {path: 'edithab/:id', component: EditHabilidadComponent},
  {path: 'editpro/:id', component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }