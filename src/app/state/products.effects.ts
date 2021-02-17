import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { ProductsService } from './products.service';
import * as ProductActions from '../actions/product.actions';
import * as UserActions from '../actions/user.actions';

 
@Injectable()
export class ProductEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GetProducts),
    mergeMap(() => this.productsService.getProducts()
      .pipe(
        map(products => ProductActions.LoadProducts({ products: products})),
        catchError(() => of(ProductActions.LoadProductsError()))
      ))
    )
  );

  loadOneProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GetProduct),
    mergeMap((data) => this.productsService.getProduct(data.productId)
      .pipe(
        map((product) => ProductActions.LoadOneProduct({product})),
        catchError(() => of(ProductActions.LoadProductError()))
      ))
    )
  );

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.AddProduct),
    mergeMap((product) => this.productsService.addProduct(product.submittedValue)
      .pipe(
        map(() => ProductActions.AddProductSuccess()),
        catchError(() => of(ProductActions.AddProductError()))
      ))
    )
  );

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.UpdateProduct),
    mergeMap((data) => this.productsService.updateProduct(data)
      .pipe(
        map(() => ProductActions.UpdateProductSuccess()),
        catchError((error) => of(ProductActions.UpdateProductError( { error })))
      ))
    )
  );

  
  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.DeleteProduct),
    mergeMap((data) => this.productsService.deleteProduct(data.productId)
      .pipe(
        map(() => ProductActions.DeleteProductSuccess()),
        catchError(() => of(ProductActions.DeleteProductError()))
      ))
    )
  );

  // getCart$ = createEffect(() => this.actions$.pipe(
  //   ofType(UserActions.GetCart),
  //   mergeMap(() => this.productsService.getProducts()
  //     .pipe(
  //       map(products => {
  //         products.filter
  //         UserActions.UserLoggedIn())},
  //       catchError(() => of(UserActions.UserLoginError()))
  //     ))
  //   )
  // );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}