import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    exports: [
     MatFormFieldModule,
     MatSlideToggleModule,
     MatInputModule,
     MatGridListModule,
     MatCardModule,
     FormsModule,
     ReactiveFormsModule,
     MatIconModule,
     MatButtonModule,
     MatToolbarModule,
     MatSidenavModule,
     MatSnackBarModule,
     MatExpansionModule,
     MatTableModule,
     MatSelectModule,
     MatTooltipModule,
     MatDialogModule
    ],

  })
  export class AppMaterial { }