import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
				MatCardModule,
				MatExpansionModule,
				MatTableModule,
        MatListModule,
        MatSortModule
				} from '@angular/material';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { CdkTableModule } from '@angular/cdk/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({

  imports:
  [
  	CommonModule,
  	MatCardModule,
  	MatExpansionModule,

  	MatTableModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatGridListModule,

  	CdkTableModule
	],
  exports:
  [
  	MatCardModule,
  	MatExpansionModule,
  	MatTableModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatSortModule,
    MatGridListModule,
  	CdkTableModule
	],

  declarations: []
})
export class MatModule { }

