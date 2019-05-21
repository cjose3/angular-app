import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthenticatedGuard } from './core/authentication/authenticated.guard'
import { UnauthenticatedGuard } from './core/authentication/unauthenticated.guard'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [UnauthenticatedGuard],
    canLoad: [UnauthenticatedGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './home/home.module#HomeModule'
    // canActivate: [AuthenticatedGuard],
    // canLoad: [AuthenticatedGuard]
  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthenticatedGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
