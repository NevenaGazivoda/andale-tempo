export interface Category {
  id: number;
  name: string;
  label: string;
  children: Category[];
}
