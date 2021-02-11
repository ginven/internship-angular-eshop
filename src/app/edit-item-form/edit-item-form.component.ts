import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.scss']
})
export class EditItemFormComponent implements OnInit {
  product
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  deleteProduct(id): void {
    this.productsService.deleteProduct(id)
    .subscribe();
  }
}
