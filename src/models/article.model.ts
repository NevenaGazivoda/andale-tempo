export interface Article {
  brand: string;
  articleName: string;
  description: string;
  features: string[];
  supplierColor: string;
  material: string;
  countryOfOrigin: string;
  articleCode: string;
  price: number;
  newPrice?: number;
  discount?: number;
  images: { url: string; title: string }[];
  articleSize: { value: string; label: string }[];
  modelSize: string;
}
