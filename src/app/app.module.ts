import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StatusPipePipe} from './pipes/status-pipe.pipe';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
