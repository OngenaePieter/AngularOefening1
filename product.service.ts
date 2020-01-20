import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
   getAllProducts(): any {
      let Product1 = "name: Belgin 13, brand: Belgin,description: Belgin Ultra 13, a new Belgian gin, distilled according to old principles. The Belgin Ultra 13 has an own personality, a very nice gin with a complicated taste. ,price: 28.99"
      let Product2 = "name: Tanqueray Nr10,brand: Tanqueray,description: Just like the Tanqueray Special Dry, the Nr10 has an alcohol percentage of about 47,30 %. This gin as introduced for the first time in 2000 and is a nice addition to the portfolio of this producer.,price: 40.99"
      return Product1 + Product2;
   }

   constructor(

   ) { }

}
