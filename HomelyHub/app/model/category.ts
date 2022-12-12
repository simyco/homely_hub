export interface Category {
  id: string;
  icon: string;
  name: string;
  active: boolean;
  parentId?: string;
  subcategories?: SubCategory[];
}
export interface SubCategory extends Omit<Category, 'subcategories'> {}
export enum OnboardingType {
  Base = 1,
  Family = 2,
  Health = 3,
  Hobby = 4,
  House = 5,
}
