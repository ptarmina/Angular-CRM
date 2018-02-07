import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ContactTableComponent } from './contacts/contact-table/contact-table.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  /*
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashBoardComponent
  },
  */


  {
    path: '',
    redirectTo: '/dash-board',
    pathMatch: 'full'
  },
  {
    path: 'dash-board',
    component: DashBoardComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
  path: 'edit-contact/:id',
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