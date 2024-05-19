import {createProduct, calcStock, products} from './product.service';

createProduct({
    name: 'Shirt',
    createdAt: new Date(2001, 1, 1),
    stock: 10
});

createProduct({
    name: 'Short',
    createdAt: new Date(2002, 1, 1),
    stock: 20,
    size: 'M'
});

console.log(products);

const total = calcStock();
console.log(total);