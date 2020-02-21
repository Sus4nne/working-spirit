import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data/state for this component. In bigger applications this will live in a service or
  // state management solution (ngrx, akita), but for now we hold it inside this component.
  countries: Array<any> = [];
  countryName = '';
  currentCountry: any = null;

  // Url of external API to talk to (should be in
  // an environment variable or the like, in real life applications)
  url = 'https://restcountries.eu/rest/v2/name/';

  // constructor, DI of http client. IRL applications this should be in a Service.
  constructor(private http: HttpClient) {

  }

  // methods
  searchCountry(): void {
    if (this.countryName.length < 2) {
      return;
    }
    console.log(this.countryName); // demo

    // call external API endpoint
    this.http.get(this.url + this.countryName)
      .subscribe((response: any[]) => {
        console.log(response);  // demo
        this.countries = response;
      });
  }

  // Capture event and set the current country, which is then passed on to
  // the detail component
  onCurrentCountry(country: any) {
    this.currentCountry = country;
  }

  // Clear all variables;
  clear(){
    this.currentCountry = null;
    this.countries = [];
    this.countryName = ''
  }
}
