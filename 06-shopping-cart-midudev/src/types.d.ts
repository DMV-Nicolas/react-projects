export type Product = {
    id: number
    name: string
    description: string
    price: number
    discountPercentage: number
    discountedPrice: number
    rating: number
    stock: number
    brand: string
    category: string
    image: string
    images: string[]
}

export type Filters = {
    category: string
    minPrice: number
}