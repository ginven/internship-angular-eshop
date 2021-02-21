import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { ProductsService } from './products.service';
import * as ProductActions from '../actions/product.actions';
import * as UserActions from '../actions/user.actions';
import { SetValueAction, ResetAction } from 'ngrx-forms';
import { productsFormKey, initialState } from './product.reducer';
import { Store } from '@ngrx/store';
import { getForm } from './product.selector';

 
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

 public getProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.GetProduct),
    mergeMap((data) => this.productsService.getProduct(data.productId)
      .pipe(
        map((product) => new SetValueAction(productsFormKey,product)),
        catchError(() => of(ProductActions.LoadProductError()))
      ))
    )
  );


  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.AddProduct),
    withLatestFrom(this.store.select(getForm)),
    mergeMap((data) => this.productsService.addProduct(data[1].value)
      .pipe(
        map(() => ProductActions.UpdateProductSuccess()),
        catchError((error) => of(ProductActions.AddProductError( { error })))
      ))
    )
  );

  
 addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.UpdateProduct),
    withLatestFrom(this.store.select(getForm)),
    mergeMap((data) => this.productsService.updateProduct(data[1].value)
      .pipe(
        map(() => ProductActions.UpdateProductSuccess()),
        catchError((error) => of(ProductActions.UpdateProductError( { error })))
      ))
    )
  );

  public updateProductSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.UpdateProductSuccess),
    mergeMap(() => of(
      new SetValueAction(productsFormKey,initialState.editForm.value),
      new ResetAction(productsFormKey)
    ))
  ))

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.DeleteProduct),
    mergeMap((data) => this.productsService.deleteProduct(data.productId)
      .pipe(
        map(() => ProductActions.UpdateProductSuccess()),
        catchError(() => of(ProductActions.DeleteProductError()))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store
  ) {}
}