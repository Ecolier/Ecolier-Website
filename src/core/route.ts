import * as Express from 'express'
import { Controller } from './controller'

export interface Router extends Express.Router {
    [method: string]: any
}

export interface Route {
    path: string
    method: string
    router: Express.Router
    controller: typeof Controller
}