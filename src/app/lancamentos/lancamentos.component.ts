import { Component, OnInit } from '@angular/core';
import { Vitrine } from '../Vitrine';

@Component({
  selector: 'app-home',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {
  vitrine = new Vitrine();

  constructor() { }

  getItems() {
    return this.vitrine.items;
  }

  ngOnInit() {

  }

}

