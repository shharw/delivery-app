const countButtons = document.querySelectorAll('.btn.btn-dark.rounded-circle')

countButtons.forEach(button=>{
    button.addEventListener('click', () =>{
        const productCountSpan = button.parentElement.querySelector('#product-count')
        const totalSumSpan = document.querySelector("#total-sum")
        const price = Number(button.parentElement.previousSibling.dataset.price)

        let product = JSON.parse(localStorage.getItem('products'))
        const productId = productCountSpan.dataset.id
        let productCount = Number(productCountSpan.textContent)

        if(button.textContent === '+'){
            productCount++
            productCountSpan.textContent = String(productCount)
            product[productId].count = productCount
            localStorage.setItem('products', JSON.stringify(product))

            total_price += price
        }else{
            if(productCount > 1){
                productCount--
                productCountSpan.textContent = String(productCount)
                product[productId].count = productCount
                localStorage.setItem('products', JSON.stringify(product))

                total_price -= price
            }
        }
        totalSumSpan.textContent = String(total_price.toFixed(1))
        localStorage.setItem('total_price', String(total_price.toFixed(1)))
    })
})