import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  buttonCounter: number = 100;
  @Input() color: string = 'blue';

  constructor() {}

  title: String = 'TODO LIST';

  ngOnInit(): void {}

  toggleColor() {
    this.color = this.color === 'blue' ? 'green' : 'blue';
  }
}
