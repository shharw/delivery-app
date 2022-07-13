let total_price = Number()
const prices_h5 = document.querySelectorAll(".card-title.price")

if(localStorage.getItem('products') != null && localStorage.getItem('products') != '[]') {
    if (Number(localStorage.getItem('total_price')) === 0) {
        prices_h5.forEach(price => {
            total_price += Number(price.dataset.price)
        })
    } else {
        total_price = Number(localStorage.getItem('total_price'))
    }
}else{
    total_price = 0
}

document.querySelector("#total-sum").textContent = String(total_price.toFixed(1))
localStorage.setItem('total_price', String(total_price.toFixed(1)))
