type Action = {
    type:string,
    quantity:number
}

function wallet(actions : Action[], conversionRates:{[key:string]:number}):number {
    let total = 0;
    for (const action of actions) {
        const conversionRate = conversionRates[action.type]
        if(conversionRate === undefined) {
            console.error(`Conversion de ce type : ${action.type} n'existe pas`)
            continue;
        }
        total += action.quantity * conversionRate
    }
    console.log(`Total : ${total}`)
    return parseFloat(total.toFixed(2));
}

async function fetchConversion(): Promise<{[key:string]:number}> {
    const apiKey = "50260edb4ac31432d12d0fb3"
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des taux de conversion : ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data.conversion_rates;
}

async function walletApi(actions: Action[]): Promise<number> {
    try {
        const conversionRates = await fetchConversion();
        return wallet(actions, conversionRates);
    }catch (err) {
        console.error('Erreur dans la fonction walletApi:', err);
        throw err;
    }
}
// const actions: Action[] = [
//     { type: 'USD', quantity: 100 },
//     { type: 'EUR', quantity: 1.04 },
//     { type: 'GBP', quantity: 75 },]

// const conversionRates = {
//     "EUR": 10,
// }

// Test de la fonction walletApi avec des actions et des conversionRates
// (async()=>{
//     const actions: Action[] = [
//         { type: 'USD', quantity: 100 },
//         { type: 'EUR', quantity: 1.04 },
//         { type: 'GBP', quantity: 75 },]
//     const result = await walletApi(actions)
//     console.log(result);
// })
const actions: Action[] = [
    { type: 'USD', quantity: 100 },
    { type: 'EUR', quantity: 1.04 },
    { type: 'GBP', quantity: 75 },]
walletApi(actions)
// console.log(result);
// console.log(wallet(actions,conversionRates)); 
// console.log(fetchConversion())