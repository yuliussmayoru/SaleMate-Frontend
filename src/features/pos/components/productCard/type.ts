import { ButtonHTMLAttributes } from "react";

export type productCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  productImage?: string;  
  containerClassName?: string;
  productName?: string;
  price?: number;
};
