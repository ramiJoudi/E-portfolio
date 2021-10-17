import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

const routes: Routes = [ 
//  {path:"home",component:HomeComponent},
//  {path:"cv",component:PortfolioComponent},
//  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
