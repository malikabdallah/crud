import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'edit', component: EditContactComponent },
  { path: 'add', component: AddContactComponent },
  { path: '', component: MenuComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
