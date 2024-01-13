import { Product } from "../types";
import { products } from "../mocks/products.json"

export async function searchProducts(): Promise<Product[]> {
    return products.map((p): Product => ({
        id: p.id,
        name: p.title,
        description: p.description,
        price: p.price,
        discountPercentage: p.discountPercentage,
        discountedPrice: p.price - (p.price * p.discountPercentage),
        rating: p.rating,
        stock: p.stock,
        brand: p.brand,
        category: p.category,
        image: p.thumbnail,
        images: p.images,
    }))
}