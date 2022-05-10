import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

const MATERIALS = [
                  MatButtonModule,
                  MatInputModule,
                  MatInputModule,
                  MatFormFieldModule,
                  MatCardModule,
                  MatToolbarModule,
                  MatIconModule,
                  MatExpansionModule
                ]

@NgModule({
  declarations: [],
  imports: MATERIALS,
  exports: MATERIALS
})
export class MaterialModule { }
