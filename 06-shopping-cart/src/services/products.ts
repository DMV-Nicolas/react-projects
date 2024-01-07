import { Product } from "../types";
import JSONResponse from "../mocks/products.json"

export function getProducts(): Product[] {
    return JSONResponse.products.map((p): Product => ({
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
        images: p.images
    }))
}