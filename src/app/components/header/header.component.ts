import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  buttonCounter: number = 100;
  color: String = 'blue';
  constructor() {}

  title: String = 'Hello Roky Container';

  ngOnInit(): void {}

  incrementCounter() {
    this.buttonCounter += 1;
  }

  toggleColor() {
    this.color = this.color === 'blue' ? 'green' : 'blue';
  }
}
