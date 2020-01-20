import { Injectable } from '@angular/core';
import { Product } from './product';
import { concat } from 'rxjs';

@Injectable()
export class ProductService {
   getAllProducts(): Product[] {
      const product1 = new Product("Belgin", "Belgin", " Belgin Ultra 13, a new Belgian gin, distilled according to old principles.", 28.99)
      const product2 = new Product("Tanqueray Nr10", "Tanqueray", " Just like the Tanqueray Special Dry, the Nr10 has an alcohol percentage of about 47,30", 40.99)

      return [product1, product2];
   }

   constructor(

   ) { }

}
