(() => {

    let myDynamicVar: any;
    myDynamicVar = 'Hello World';
    myDynamicVar = 12;
    myDynamicVar = true;
    myDynamicVar = {};
    myDynamicVar = null;

    myDynamicVar = "Hola";
    const rta = (myDynamicVar as string).toLowerCase();
    console.log('rta', rta);

    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log('rta2', rta2);

})();