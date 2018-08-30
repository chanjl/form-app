import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

const MODULES = [MatToolbarModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule];

@NgModule({
    imports: MODULES,
    exports: MODULES
}) 
export class MaterialModule {}