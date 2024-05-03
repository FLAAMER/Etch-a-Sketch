let numberOfSquares = 16

const resizeButton = document.querySelector("button#resize")
resizeButton.addEventListener("click", () => gridResize())

function generateGrid(numberOfSquares) {
    if (numberOfSquares <=100) {
        for (let i = 0; i < numberOfSquares*numberOfSquares; i++) {
            const container = document.querySelector("#container")
            const div = document.createElement("div")
            div.className = "grid"
            div.style.opacity = "1"
            div.addEventListener("mouseenter", () => rgb())
            const padding = 32/(numberOfSquares*2)
            div.style.padding =`${padding}vw`
            container.appendChild(div)
            function rgb() {
                if (div.className === "grid") {
                    let red = Math.floor(Math.random()*256)
                    let blue = Math.floor(Math.random()*256)
                    let green = Math.floor(Math.random()*256)
                    let bgColor = "rgb(" + red + "," + blue + "," + green + ")";
                    div.style.backgroundColor = bgColor
                    div.className = "colored"
                } else if (div.className === "colored") {
                    let opacity = div.style.opacity
                    let newOpacity = opacity - 0.1
                    div.style.opacity = `${newOpacity}`
                }
            }
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
    const div = document.querySelector("div#container div")
    container.removeChild(div)
    }
    numberOfSquares = prompt("How many squares per side of the grid (max 100)")
    generateGrid(numberOfSquares)
}

