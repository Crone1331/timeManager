import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StatusPipePipe} from './pipes/status-pipe.pipe';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
import {NotificationComponent} from './notification/notification.component';
import {NotificationService} from 'src/app/services/notification.service';
registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    StatusPipePipe,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
