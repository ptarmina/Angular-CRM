import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
				MatCardModule,
				MatExpansionModule,
				//MatTableDataSource,
				MatTableModule
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
  	CdkTableModule
	],
  exports:
  [
  	MatCardModule,
  	MatExpansionModule,
  	//MatTableDataSource,
  	MatTableModule,
  	CdkTableModule
	],

  declarations: []
})
export class MatModule { }