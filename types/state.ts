export interface userStore {
  name: string;
  email: string;
  cart: itemCart[];
  userMethods: {
    isLogin: () => boolean;
  };
  cartMethods: {
    addItem: (data: itemCart) => void;
    removeFromCart: (id: string) => void;
    removeAll: () => void;
    totalPrice: () => string;
  };
}

export interface itemCart {
  id: string;
  title: string;
  price: number;
  qty: number;
  image: string;
}

export interface productStore {
  products: Product[];
  setproducts: (products: Product[]) => void;
}

export interface Product {
  id: string;
  availableForSale: boolean;
  createdAt: Date;
  updatedAt: Date;
  descriptionHtml: string;
  description: string;
  handle: string;
  productType: string;
  title: string;
  vendor: string;
  publishedAt: Date;
  onlineStoreUrl: string | null;
  options: Array<{}> | null;
  images: Array<{}>;
  variants: Array<{}> | null;
  type: {
    name: string;
    kind: string;
    fieldBaseTypes: {};
    implementsNode: boolean;
  };
  hasNextPage: { value: boolean };
  hasPreviousPage: { value: boolean };
  variableValues: { first: number };
}
