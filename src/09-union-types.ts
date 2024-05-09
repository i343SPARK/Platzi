(()=>{

    let userID: string | number;
    userID = 10123123;
    userID = 'asdsad';

    function greeting(myText: string | number){
        if (typeof myText === 'string'){
            console.log(`string: ${myText.toLowerCase()}`);
            
        } else {
            console.log(`number: ${myText.toFixed(1)}`);
            
        }
    }

    greeting('Hello');
    greeting(123.12312);
})();