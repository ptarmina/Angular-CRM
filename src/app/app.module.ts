import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './mat-module/mat.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ApiService } from './shared/api.service'
import { UtilitiesService } from './shared/utilities.service'
import { ContactService } from './shared/contact.service'

import { ContactTableComponent } from './contacts/contact-table/contact-table.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MdcButtonModule, MdcFabModule} from '@angular-mdc/web';
import { MdcElevationModule } from '@angular-mdc/web';
import { MdcThemeModule } from '@angular-mdc/web';
import { MdcListModule } from '@angular-mdc/web';
//import { MdcMenuModule } from '@angular-mdc/web';
import { MdcTypographyModule } from '@angular-mdc/web';
//import { MdcTextFieldModule } from '@angular-mdc/web';

import { CommonHeaderComponent } from './common-header/common-header.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ContactContainerComponent } from './contacts/contact-container/contact-container.component';
import { ContactRowsComponent } from './contacts/contact-rows/contact-rows.component';
import { ContactRowComponent } from './contacts/contact-row/contact-row.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    AddContactComponent,
    ContactTableComponent,
    EditContactComponent,
    ContactDetailComponent,
    DashBoardComponent,
    CommonHeaderComponent,
    AddButtonComponent,
    BackButtonComponent,
    ContactContainerComponent,
    ContactRowsComponent,
    ContactRowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatModule,
    FlexLayoutModule,
    MdcButtonModule,
    MdcFabModule,
    MdcElevationModule,
    MdcThemeModule,
    MdcListModule,
    MdcTypographyModule,
    //MdcMenuModule,
    //MdcTextFieldModule

  ],
  providers: [
    ApiService,
    ContactService,
    UtilitiesService
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
