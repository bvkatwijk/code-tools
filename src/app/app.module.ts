import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FluidBuilderComponent } from './components/builder/fluid-builder/fluid-builder.component';
import { CodeInputComponent } from './components/code-input/code-input.component';
import { CodeOutputComponent } from './components/code-output/code-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FluidBuilderComponent,
    CodeInputComponent,
    CodeOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
