import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // used for [(ngModel)] on the textbox in the main component
    HttpClientModule // used for http-communication (built in, no need to use axios here)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
