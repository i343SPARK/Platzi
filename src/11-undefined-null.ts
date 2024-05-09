(()=>{

    // let myNumber: number = undefined;
    // let myString: string = null;

    let myNull: null = null;
    let myUndefined: undefined = undefined;
    
    let myNumber: number | null = null; 
    myNumber = 10;

    let myString: string | undefined = undefined;
    myString = 'Hello';

    function hi(name: string | null){
        let hello = "Hello, ";
        if (name){
            hello += name;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }

    function hiV2(name: string | null){
        let hello = "Hello, ";
        hello += name?.toLowerCase() || 'nobody';
        console.log(hello);
    }

    hi('John');
    hi(null);
})();