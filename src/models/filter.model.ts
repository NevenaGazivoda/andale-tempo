import { Category } from './category.model';

export interface Filter {
  id: number;
  label: string;
  children?: Filter[];
  isHidden?: boolean;
  type: string;
}
