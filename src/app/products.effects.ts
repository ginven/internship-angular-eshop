import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from './products.service';
 
@Injectable()
export class ProductEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType('[Products Load] Load Products'),
    mergeMap(() => this.productsService.getProducts()
      .pipe(
        map(products => ({ type: '[Products Load] Products Load Success', payload: products})),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}