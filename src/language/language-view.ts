import { View, renderable } from '../core/view'
import { Locale, LocalizedPaths, Translation } from './language-model'


export interface LanguageViewData {
    locale: string
    translations: Translation
    availableLocales: Locale[]
    localizedPaths: LocalizedPaths
}

export class LanguageView extends View { 
    @renderable('page') public languageData: Partial<LanguageViewData> = {}
}