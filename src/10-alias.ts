(()=>{

    type UserID = string | number;

    let userID: UserID;

    // Literal types

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    shirtSize = 'S';

    function greeting(userID: UserID, size: Sizes){
        {
            if (typeof userID === 'string'){
                console.log(`string: ${userID.toLowerCase()}`);
                
            }
        }
    }

    greeting('Hello, your size is', 'M');
})();