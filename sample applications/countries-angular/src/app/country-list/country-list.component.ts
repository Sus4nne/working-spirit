import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  @Input() countries: any[];
  @Output() currentCountry = new EventEmitter<any>();

  // emit an event up to the parent component, to receive the country that is clicked on.
  setCountry(country: any) {
    this.currentCountry.emit(country);
  }
}
