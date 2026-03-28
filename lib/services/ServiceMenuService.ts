import type { Service, ServiceCategory } from "@/lib/models";
import { SERVICES_DATA } from "@/lib/data/services";

export class ServiceMenuService {
  static getAll(): Service[] {
    return SERVICES_DATA;
  }

  static getByCategory(cat: ServiceCategory): Service[] {
    return SERVICES_DATA.filter((s) => s.category === cat);
  }

  static getCategories(): ServiceCategory[] {
    return [...new Set(SERVICES_DATA.map((s) => s.category))];
  }

  static getFeatured(limit = 6): Service[] {
    return SERVICES_DATA.slice(0, limit);
  }
}
