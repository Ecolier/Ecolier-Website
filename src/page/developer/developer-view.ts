import { BaseView } from "../../base/base-view";
import { renderable } from "../../core/view";

export class DeveloperView extends BaseView {
    @renderable('developer') developer: Partial<Developer> = {}
    @renderable('page') page = { title: 'Developer' }
    constructor () { super('developer.ejs') }
}