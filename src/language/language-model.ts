export interface Locale {
    code: string,
    name: string
}

export interface Translation {
    [locale: string]: any
}

export interface LocalizedPaths {
    [locale: string]: string
}