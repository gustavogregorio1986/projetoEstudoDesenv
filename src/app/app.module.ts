import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagina/home/home.component';
import { SobreComponent } from './pagina/sobre/sobre.component';
import { ProdutoComponent } from './pagina/produto/produto.component';
import { RouterModule, Routes } from '@angular/router';
import { VisaoComponent } from './pagina/visao/visao.component';
import { EstategiaComponent } from './pagina/estategia/estategia.component';
import { LoginComponent } from './pagina/login/login.component';
import { CadastroComponent } from './pagina/cadastro/cadastro.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'sobre', component: SobreComponent },
   { path: 'produto', component: ProdutoComponent },
   { path: 'visao', component: VisaoComponent  },
   { path: 'estrategia', component: EstategiaComponent  },
   { path: 'login', component: LoginComponent  },
   { path: 'cadastro', component: CadastroComponent  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ProdutoComponent,
    VisaoComponent,
    EstategiaComponent,
    LoginComponent,
    CadastroComponent,
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
