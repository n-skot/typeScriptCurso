import { addProduct, calcStock, products } from "./16-product.service";

addProduct({ name: "Shirt", price: 19.99, size: "large", stock: 100 });

addProduct({ name: "Pants", price: 29.99, size: "medium", stock: 50 });

console.log(products);

const total = calcStock();
console.log(total);
