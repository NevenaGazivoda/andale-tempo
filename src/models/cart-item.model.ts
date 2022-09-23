export interface CartItem {
    brand: string;
    articleName: string;
    articleCode: string;
    size: { value: string, label: string };
    price: number;
    newPrice?: number;
    discount?: number;
    image: { url: string, title: string };
}