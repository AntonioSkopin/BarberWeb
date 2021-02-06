import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "start", component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
