import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { MenuResponsivo } from './feats/menu-responsivo/menu-responsivo';
import { Event } from './feats/event/event';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { TwoWayBind } from './feats/two-way-bind/two-way-bind';
import { AlunosFavoritos } from './feats/alunos-favoritos/alunos-favoritos';
import { Exercicios } from './feats/exercicios/exercicios';
import { ExemploForm } from './feats/exemplo-form/exemplo-form';

export const routes: Routes = [

    { path: 'contato', component: Contato },
    { path: 'home', component: Home },
    { path: 'menu-responsivo', component: MenuResponsivo },
    { path: 'event', component: Event },
    { path: 'prop-binding', component: PropBinding },
    { path: 'bind', component: TwoWayBind },
    { path: 'alunos', component: AlunosFavoritos },
    { path: 'exercicios', component: Exercicios },
    { path: 'form', component: ExemploForm },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
