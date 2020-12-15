import { BaseView } from "../../base/base-view"
import { renderable } from "../../core/view"

export interface LandingViewData {
    featured: string[],
    article: {}
}

export class LandingView extends BaseView {
    @renderable('landing') public landingData: Partial<LandingViewData> = { }
    @renderable('page') public pageData = { title: 'Ecolier' }
    constructor () { super('landing.ejs') }
}