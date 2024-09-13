export type ProductProps = {
    product_category_id: number;
    product_id: number;
    product_name: string;
    product_price: number;
    product_image: string | null;
  };


  export type CategoryProps = {
    product_category_id: number;
    product_category_name: string;
  }