const cartButtons = document.querySelectorAll('.add-to-card-btn')
let storage

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const data = button.getAttribute('name').split('|')
        const product = {
            shop_name: data[0],
            name: data[1],
            price: data[2],
            count: 1
        }
        if (JSON.parse(localStorage.getItem('products')) === null){
            storage = []
        }else{
            storage = JSON.parse(localStorage.getItem('products'))
        }
        storage.push(product)
        let total = 0
        for (var productElement of storage) {
            total += productElement.price*productElement.count
        }
        localStorage.setItem('total_price', String(total.toFixed(1)))
        localStorage.setItem('products', JSON.stringify(storage))
    })
})