import { Component, OnInit } from '@angular/core';
import { Vitrine } from '../Vitrine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vitrine = new Vitrine();

  constructor() { }

  getItems() {
    return this.vitrine.items;
  }

  ngOnInit() {
  }

}
