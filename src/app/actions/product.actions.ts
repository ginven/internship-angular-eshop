import { Title } from '@angular/platform-browser';
import { createAction, Action, props } from '@ngrx/store';

import { Products } from '../models/product';
import { EditFormValue } from '../state/product.reducer';


export const GetProducts = createAction('[Products Load] Load Products')

export const LoadProducts = createAction(
    '[Products Load] Products Load Success', props<{ products: Products[] }>()
)

export const LoadProductsError = createAction(
    '[Products Load] Products Load Failed'
)

export const GetProduct = createAction(
    '[Product Load] Load One Product', props<{ productId: number }>()
)

export const LoadOneProduct = createAction(
    '[Product Load] Product Load Success', props<{product: Products}>()
)

export const LoadProductError = createAction(
    '[Product Load] Product Load Failed'
)

export const AddProduct = createAction(
    '[Add Product] Submit New Product', props<{submittedValue: EditFormValue}>()
)

export const AddProductSuccess = createAction(
    '[Add Product] New Product Added'
)

export const AddProductError = createAction(
    '[Add Product] Add New Product Failed'
)

export const DeleteProduct = createAction(
    '[Delete Product] Delete Product', props<{ productId: number }>()
)

export const DeleteProductSuccess = createAction(
    '[Delete Product] Product Deleted'
)
export const DeleteProductError = createAction(
    '[Delete Product] Delete Product Failed'
)

export const UpdateProduct = createAction(
    '[Update Product] Submit Updated Product', props<{product: Products}>()
)

export const UpdateProductSuccess = createAction(
    '[Update Product] Product Updated'
)

export const UpdateProductError = createAction(
    '[Update Product] Product Update Failed', props<{ error }>()
)


