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
    //MatFormFieldModule,
   // MatFormFieldControl,
    //MatFormField,
  	CdkTableModule
	],

  declarations: []
})
export class MatModule { }

