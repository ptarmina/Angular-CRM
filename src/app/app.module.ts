import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './mat-module/mat.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ApiService } from './shared/api.service'
import { AgGridModule } from 'ag-grid-angular';
import { ContactTableComponent } from './contacts/contact-table/contact-table.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    AddContactComponent,
    ContactTableComponent,
    EditContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MatModule,
    AgGridModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
