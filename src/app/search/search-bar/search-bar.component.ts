import { Component } from '@angular/core';

@Component({
  selector: 'book-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  OnInput(event: Event) {
   console.log((event.target as HTMLInputElement).value); //debug
    const input = (event.target as HTMLInputElement).value;
  }

}
