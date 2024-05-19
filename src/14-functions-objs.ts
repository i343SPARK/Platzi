(() => {
    const login = (data: {email:string, password:number}) => {
        console.log(data.email, data.password);
    }

    // login("Pedro@cumamoto.iscariote", "123456");
    login({
        email: "Pedro@cumamoto.iscariote", 
        password: 123456
    });

    type Sizes = 'S' | 'M' | 'L' | 'XL';

    const products: any[] = [];

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
        products.push(data);
    }

    addProduct({
        title: 'Shirt',
        createdAt: new Date(),
        stock: 10,
        size: 'M'
    });

    addProduct({
        title: 'Shirt',
        createdAt: new Date(),
        stock: 10
    });

    console.log(products);
})();