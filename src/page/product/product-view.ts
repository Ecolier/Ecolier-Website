import { BaseView } from '../../base/base-view'
import { renderable } from '../../core/view'
import { Product, Summary } from './product-model'

export class ProductView extends BaseView {
    @renderable('product') product: Partial<Product> = {}
    @renderable('summary') summary = new Summary()

    constructor () { 
        super('product.ejs') 
    }  
}