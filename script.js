let numberOfSquares = 16

const resizeButton = document.querySelector("button#resize")
resizeButton.addEventListener("click", () => gridResize())

function generateGrid(numberOfSquares) {
    if (numberOfSquares <=100) {
        for (let i = 0; i < numberOfSquares*numberOfSquares; i++) {
            const container = document.querySelector("#container")
            const div = document.createElement("div")
            div.className = "grid"
            div.addEventListener("mouseenter", () => div.style.backgroundColor = "indianred")
            const padding = 32/(numberOfSquares*2)
            div.style.padding =`${padding}vw`
            container.appendChild(div)
        }
    } else {
        alert("Invalid")
    }
}

generateGrid(numberOfSquares)

function gridResize() {
    console.log(numberOfSquares)
    for (let i = 0; i < numberOfSquares*numberOfSquares; i++) {
    const container = document.querySelector("div#container")
    const div = document.querySelector("div.grid")
    container.removeChild(div)
    }
    numberOfSquares = prompt("How many squares per side of the grid (max 100)")
    generateGrid(numberOfSquares)
}