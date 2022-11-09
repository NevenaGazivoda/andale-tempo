export interface Category {
  id: number;
  name: string;
  type: string;
  label: string;
  children: Category[];
}
