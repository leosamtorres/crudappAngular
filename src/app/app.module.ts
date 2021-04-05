import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing, RoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { HeadBarComponent } from './shared/head-bar/head-bar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

import { NumberDirective } from './directives/number.directive';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';



@NgModule({
  declarations: [
    NumberDirective,
    AppComponent,
    HeadBarComponent,
    FooterComponent,
    CadastroComponent,
    ClienteListComponent,
    HomePageComponent,
    CadastroPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
