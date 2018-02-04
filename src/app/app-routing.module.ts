import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ContactTableComponent } from './contacts/contact-table/contact-table.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contact-detail',
    component: ContactDetailComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
  path: 'edit-contact',
    component: EditContactComponent
  },
  {
    path: 'contact-table',
    component: ContactTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }