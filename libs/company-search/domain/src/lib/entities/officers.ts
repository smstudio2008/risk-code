export interface IOfficers {
    etag: string
    links: Links
    kind: string
    items_per_page: number
    items: Item[]
    active_count: number
    total_results: number
    resigned_count: number
}

interface Links {
    self: string
}

interface Item {
    address: Address
    name: string
    appointed_on?: string
    officer_role: string
    links: Links2
    date_of_birth?: DateOfBirth
    occupation?: string
    country_of_residence?: string
    nationality?: string
    resigned_on?: string
}

interface Address {
    premises?: string
    postal_code: string
    country?: string
    locality: string
    region?: string
    address_line_1: string
    address_line_2?: string
}

interface Links2 {
    officer: Officer
}

interface Officer {
    appointments: string
}

interface DateOfBirth {
    month: number
    year: number
}
