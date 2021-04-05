import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'usuario', component: CadastroPageComponent }
];

export const RoutingProviders: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

