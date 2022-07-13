buttons = document.querySelectorAll('.shop-btn')
let prevRows = document.querySelectorAll(`[data-id="${buttons[0].id}"]`)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        prevRows.forEach(row=>{
            row.setAttribute('hidden','hidden')
        })
        const rows = document.querySelectorAll(`[data-id="${button.id}"]`)
        prevRows = Array.from(rows)
        rows.forEach(row => {
            row.removeAttribute('hidden')
        })
    })
})