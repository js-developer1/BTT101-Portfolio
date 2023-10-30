function generateBinaryLine(length, elem) {
    const widthOfCharacter = 6
    const padding = 20
    const numCharacters = (length - padding) / widthOfCharacter

    let numbers = []

    for (let i = 0; i < numCharacters; i++) {
        const number = Math.round(Math.random())
        numbers.push(number)
    }
    return numbers
}

const binaryLines = document.querySelectorAll(".binaryLine")

for (const binaryLine of binaryLines) {
    const parentElem = binaryLine.parentNode
    const maxWidth = parentElem.offsetWidth
    let numbers = generateBinaryLine(maxWidth, binaryLine)
    let txt = ''
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        txt += number
    }
    binaryLine.innerHTML = txt
}