const stock = {
    apple: 10,
    banana: 0,
    orange: 5
};

function checkStock(product) {
    return new Promise((resolve, rejecte) => {

        if (stock[product] > 0) {
            resolve(`Product ${product} is in stock`)
        }
        else {
            rejecte(`Product ${product} is out of stock`)
        }

    });
}

checkStock("apple")
    .then(res => {
        console.log(res);
    })
    .catch((err) => { console.log(err); })

checkStock("banana")
    .then(res => {
        console.log(res);
    })
    .catch((err) => { console.log(err); })
checkStock("orange")
    .then(res => {
        console.log(res);
    })
    .catch((err) => { console.log(err); })



function fetchUser(id)
{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(id !== 1)
                rej(new Error("User not found"))
            else
                res({id: 1, name: 'John Doe'})      
        }, 2000)
    })
}

fetchUser(2)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))