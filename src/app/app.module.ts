import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagina/home/home.component';
import { SobreComponent } from './pagina/sobre/sobre.component';
import { ProdutoComponent } from './pagina/produto/produto.component';
import { RouterModule, Routes } from '@angular/router';
import { VisaoComponent } from './pagina/visao/visao.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'sobre', component: SobreComponent },
   { path: 'produto', component: ProdutoComponent },
   { path: 'visao', component: VisaoComponent  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ProdutoComponent,
    VisaoComponent,
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
