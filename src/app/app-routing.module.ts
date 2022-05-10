import {ListColisComponent} from './components/list-colis/list-colis.component';
import {ColisDetailsComponent} from './components/colis-details/colis-details.component';
import {ColisFormComponent} from './components/colis-form/colis-form.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'details', component: ColisDetailsComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'add-colis', component: ColisFormComponent},
      {path: 'list-colis', component: ListColisComponent},
    ]
  },
  {  path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


