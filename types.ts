export interface Product {
  pic: string;
  price: number;
  productID: number;
  title: string;
  unit: string;
}

export interface ProductCart extends Product {
  totalPrice: number;
  quantity: number;
}

export interface Cart {
  cartList: ProductCart[];
  cartPrice: number;
  cartTax: number;
  cartQuantity: number;
}

export interface Department {
  name: string;
  imgSrc: string;
  iconSrc: string;
  categories: string[];
}

export interface DeptProduct {
  arrayOfDepartments: Department[];
  arrayOfProducts: Product[];
}
