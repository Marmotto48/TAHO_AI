import { ProductType } from "@/types/product";

export async function getProducts(): Promise<ProductType> {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
}

export async function getProductById(id: string): Promise<ProductType> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}
