import type { Branch } from "@/lib/models";
import { BRANCHES_DATA } from "@/lib/data/branches";

export class BranchService {
  static getAll(): Branch[] {
    return BRANCHES_DATA;
  }

  static getCount(): number {
    return BRANCHES_DATA.length;
  }

  static getFeatured(limit = 6): Branch[] {
    return BRANCHES_DATA.slice(0, limit);
  }

  static getById(id: number): Branch | undefined {
    return BRANCHES_DATA.find((b) => b.id === id);
  }
}
