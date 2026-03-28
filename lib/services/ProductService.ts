import type { Product, ProductCategory } from "@/lib/models";
import { PRODUCTS_DATA } from "@/lib/data/products";

export class ProductService {
  static getAll(): Product[] {
    return PRODUCTS_DATA;
  }

  static getByCategory(cat: ProductCategory): Product[] {
    return PRODUCTS_DATA.filter((p) => p.category === cat);
  }

  static getBySlug(slug: string): Product | undefined {
    return PRODUCTS_DATA.find((p) => p.slug === slug);
  }

  static getFeatured(limit = 4): Product[] {
    return PRODUCTS_DATA.slice(0, limit);
  }
}
