import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public persons: string[] = [];

  addPerson(): void {
    if (this.persons.length < 9) {
      this.persons.push('Person ' + (this.persons.length + 1).toString());
    }
  }
}
