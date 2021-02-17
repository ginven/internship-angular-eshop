import { ProductsService } from '../state/products.service';
import { Products } from './product';

export interface CartProduct {
    product: Products;
    quantity: number;
}