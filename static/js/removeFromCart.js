const removeButtons = document.querySelectorAll(".remove-btn")

removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        let storage = JSON.parse(localStorage.getItem('products'))
        const price = Number(button.parentElement.previousSibling.previousSibling.dataset.price)
        total_price -= (storage[button.dataset.id].count * price)
        storage.splice(button.dataset.id, 1)

        document.querySelector("#total-sum").textContent = String(total_price.toFixed(1))
        localStorage.setItem('total_price', String(total_price.toFixed(1)))
        localStorage.setItem('products', JSON.stringify(storage))
        window.location.reload()
    })
})