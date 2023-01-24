import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeApiComponent } from './fake-api/fake-api.component';
const routes: Routes = [
  {path:"" , component : FakeApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
