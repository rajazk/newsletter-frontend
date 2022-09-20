import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmailComponent } from './add-email/add-email.component';

const routes: Routes = [
  {
    path: '',
    component: AddEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
