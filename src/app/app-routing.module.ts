import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaComponent } from './tema/tema.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  { path: 'home', component: HomeComponent },
  { path: 'tema', component: TemaComponent },

  { path: 'tema-edit/:id', component: TemaEditComponent },
  { path: 'tema-delete/:id', component: TemaDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
