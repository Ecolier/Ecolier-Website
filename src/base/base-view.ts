import { renderable } from "../core/view";
import { LanguageView } from "../language/language-view";

export class BaseView extends LanguageView { 
    @renderable('page') public brand = 'Ecolier'
    @renderable('products') public products = [{ }]
}