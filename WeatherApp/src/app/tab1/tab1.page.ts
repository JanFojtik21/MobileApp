import { Component } from '@angular/core';
import { Tab1PageModule } from './tab1.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public data = [
    'Praha',
    'Ostrava',
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
    'Paris',
    'Rome',
    'Sydney',
    'Tokyo',
    'Zurich',
];

  public results: string[] = [];  // Inicializace results jako prázdné pole
  

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    if(query.trim() === '') {
      this.results = [];
    }else {
      this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    }
   
  }

  itemClicked(result: string) {
    console.log('Clicked on:', result);
    // Zde bude kód, který se spustí, když na položku kliknu
  }
}
