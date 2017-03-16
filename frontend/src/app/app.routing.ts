import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroVacinasComponent } from './cadastro-vacinas/cadastro-vacinas.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroColaboradorComponent } from './cadastro-colaborador/cadastro-colaborador.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  { path: 'cadastro-empresa', component: CadastroEmpresaComponent},
  { path: 'cadastro-vacinas', component: CadastroVacinasComponent},
  { path: 'cadastro-colaborador', component: CadastroColaboradorComponent},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'login',
    redirectTo: 'login',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { RouterModule, Routes } from '@angular/router';


// const appRoutes: Routes = [

//     { path: '', component: DashboardComponent }
      
// ];

// export const routing = RouterModule.forRoot(appRoutes);