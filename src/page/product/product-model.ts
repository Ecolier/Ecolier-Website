export class Summary {
    public titles: string[] = []
    hyphenate (str: string) { return str.replace(/\s/g, '-').toLowerCase() }
}

export interface Repository {
    name: string
    uri: string
}

export interface Product {
    name: string
    description: string
    content: string
    repositories: Repository[]
}