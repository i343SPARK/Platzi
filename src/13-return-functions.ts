(()=>{
    const calcTotal = (prices: number[]): string => {
        let total = 0;
        prices.forEach(item => {
            total += item;
        });

        return total.toString();
    }

    const rta = calcTotal([1,21,12,1212,12]);
    console.log('Total: ', rta);

    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`Total: ${rta}`);
    }

    printTotal([1,21,12,122,12]);

})();