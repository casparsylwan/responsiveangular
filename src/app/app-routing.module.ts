import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomefrontComponent } from './components/homefront/homefront.component';


const routes: Routes = [
  {path: '', component: HomefrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
