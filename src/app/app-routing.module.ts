import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './components/pages/page1/page1.component';
import { PageaComponent } from './components/pages/pagea/pagea.component';
import { PagebComponent } from './components/pages/pageb/pageb.component';
import { PagecComponent } from './components/pages/pagec/pagec.component';

const routes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'pagea', component: PageaComponent},
  {path: 'pageb', component: PagebComponent},
  {path: 'pagec', component: PagecComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'pagea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
