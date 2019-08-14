import {Product} from './Product';

export class Vitrine {
  items;

  constructor() {
    this.items = [
      new Product('Car', '$ 10000.00', 'https://bit.ly/2RjhvyF'),
      new Product('Car', '$ 10000.00', 'https://bit.ly/2RjhvyF'),
      new Product('Car', '$ 10000.00', 'https://bit.ly/2RjhvyF')
    ];
  }
}
