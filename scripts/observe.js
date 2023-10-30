const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const elems = document.querySelectorAll(".hidden")
console.log(elems)
elems.forEach((el) => {
    observer.observe(el)
});