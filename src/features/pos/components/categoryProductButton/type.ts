import { ButtonHTMLAttributes } from "react";

export type categoryProductButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  containerClassName?: string;
  productCategoryName?: string;
};
