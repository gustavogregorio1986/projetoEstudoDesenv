import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagina/home/home.component';
import { SobreComponent } from './pagina/sobre/sobre.component';
import { ProdutoComponent } from './pagina/produto/produto.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'sobre', component: SobreComponent },
   { path: 'produto', component: ProdutoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
