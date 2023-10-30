const body = document.querySelector("body");
const navbar = document.querySelector("#navContainer");
const navbarDimensions = navbar.getBoundingClientRect()

function hitbox(obj1, obj2) {
    const { x, y } = obj1
    const { width, height } = obj2
    if (!isInBetween(x, 0, width)) return
    if (!isInBetween(y, 0, height)) return
    return true
}

function isInBetween(num, min, max) {
    return num <= max && num >= min
}

addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event
    if (hitbox({'x': clientX, 'y': clientY}, navbarDimensions)) {
        navbar.style.height = `100px`
        navbar.style.padding = '10px 15px'
        navbar.style.marg
    } else {
        navbar.style.height = `0px`
        navbar.style.padding = '0px 15px'
    }
});