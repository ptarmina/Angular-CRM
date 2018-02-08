import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
				MatCardModule,
				MatExpansionModule,
				//MatTableDataSource,
				MatTableModule,
        MatListModule,
        //MatFormFieldModule,
        //MatFormField,
        //MatFormFieldControl
				} from '@angular/material';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({

  imports:
  [
  	CommonModule,
  	MatCardModule,
  	MatExpansionModule,
  	//MatTableDataSource,
  	MatTableModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    //MatFormFieldControl
    //MatFormFieldModule,
    //MatFormField,

  	CdkTableModule
	],
  exports:
  [
  	MatCardModule,
  	MatExpansionModule,
  	//MatTableDataSource,
  	MatTableModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    //MatFormFieldModule,
   // MatFormFieldControl,
    //MatFormField,
  	CdkTableModule
	],

  declarations: []
})
export class MatModule { }

