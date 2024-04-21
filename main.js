async function website(productID){
    let response = await fetch("https://api.escuelajs.co/api/v1/products/4");
    let product = await response.json();
    return product;
}

const purchases = [
    { id: 1, quantity: 3 },
    { id: 4, quantity: 4 },
    { id: 3, quantity: 5 }
];

async function calc(purchases){
    let ans = 0 ;
    for(const i of purchases){
        const product = await website(i.id);
        let money = product.price
        let sum = i.quantity * money;
        ans+=sum;
    }
    return ans;
}
calc(purchases).then(
    ans =>{
        console.log(ans);
    }
)



