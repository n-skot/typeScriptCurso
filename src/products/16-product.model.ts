type Sizes = 'small' | 'medium' | 'large';

type Product = {
  name: string;
  price: number;
  size: Sizes;
  stock: number;
};

export { Product, Sizes };
