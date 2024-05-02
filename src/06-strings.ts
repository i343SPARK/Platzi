(()=>{

    let productTitle = 'My amazing product';
    // productTitle = null
    // productTitle = 12
    // productTitle = () => {}
    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);

    const productDescription: string = "I'm bla bla bla";
    console.log('description', productDescription);

    let productPrice = 100;
    let isNew: boolean = false;

    const summary = ` 
    title: ${productTitle} 
    description: ${productDescription}
    price: ${productPrice}
    new: ${isNew}
    `;

    console.log('summary', summary);

    const myString: string = 'Hello World';
})();