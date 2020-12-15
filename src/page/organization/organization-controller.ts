import { BaseController } from '../../base/base-controller'
import { OrganizationView } from './organization-view'

export class OrganizationController extends BaseController {
    public view = new OrganizationView()
}