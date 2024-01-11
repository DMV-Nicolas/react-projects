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

export interface CartItem extends Product {
    quantity: number
}

export type Filters = {
    category: string
    minPrice: number
}

export type CartContextType = {
    cart: CartItem[]
    addToCart: ({ product }: { product: Product }) => void
    removeFromCart: ({ productID }: { productID: number }) => void
    clearCart: () => void
}