const targets = document.querySelectorAll('[data-target]')
const contenido = document.querySelectorAll('[data-content]')

targets.forEach(target =>{

    target.addEventListener('click', () => {

        contenido.forEach(c => {
            c.classList.remove('active')
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
    
})