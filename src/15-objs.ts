(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    };

    const products: Product[] = [];

    const addProduct = (data: Product) => {
        products.push(data);
    }

    addProduct({
        title: 'Shirt',
        createdAt: new Date(2001, 1, 1),
        stock: 10
    });

    addProduct({
        title: 'Shirt',
        createdAt: new Date(2002, 1, 1),
        stock: 10,
        size: 'M'
    });

    products.push({
        title: 'Shirt',
        createdAt: new Date(2004, 1, 1),
        stock: 10,
        size: 'XL'
    });

    console.log(products);
})();