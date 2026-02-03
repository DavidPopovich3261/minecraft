const a1 = (Math.floor(Math.random() * 50))
const a2 = (Math.floor(Math.random() * 50))
const a3 = (Math.floor(Math.random() * 50))
let toolrem = ""
console.log(a1, a2, a3);

for (let i = 1; i <= 1200; i++) {
    const element = document.createElement("div")
    contaner.appendChild(element)
    element.addEventListener("click", () => {
        console.log(toolrem);
        resources(element)
    })
    if (i > 750 && i < 1001) {
        element.className = "lend"
    }
    else if (i > 1000) {
        element.className = "ston"
    }
    else {
        element.className = "sky"
    }
    tree(i, element, a1)
    tree(i, element, a2)
    tree(i, element, a3)

}

function tree(i, element, x, y) {
    if (i > 550 && (i % 50 == x || i % 50 == (x + 1)) && i < 751) {
        element.className = "tree"
    }
    else if (i > 400 && (i % 50 > (x - 1) && i % 50 < (x + 2)) && i < 451) {
        element.className = "leaves"
    } else if (i > 450 && (i % 50 > (x - 3) && i % 50 < (x + 4)) && i < 501) {
        element.className = "leaves"
    } else if (i > 500 && (i % 50 > (x - 5) && i % 50 < (x + 6)) && i < 551) {
        element.className = "leaves"
    }
}


let countTree = 0
let countLeaves = 0
let countLend = 0
let countSton = 0

const itTree = document.getElementById("itTree")
const itLeaves = document.getElementById("itLeaves")
const itLend = document.getElementById("itLend")
const itSton = document.getElementById("itSton")

function resources(element) {
    const elementclass = element.className
    if (elementclass == "tree") {
        if (toolrem == "t axe") {
            countTree++
            itTree.innerText = JSON.stringify(countTree)
            itTree.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/wood1.png)";
            itTree.style.backgroundSize = "cover";
            element.className = "sky"
        }
    }
    else if (elementclass == "leaves") {
        if (toolrem == "t sword") {
            countLeaves++
            itLeaves.innerText = JSON.stringify(countLeaves)
            itLeaves.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/leaves1.png)";
            itLeaves.style.backgroundSize = "cover";
            element.className = "sky"

        }
    }
    else if (elementclass == "lend") {
        if (toolrem == "t shovel") {
            countLend++
            itLend.innerText = JSON.stringify(countLend)
            itLend.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/soil4.png)";
            itLend.style.backgroundSize = "cover";
            element.className = "sky"

        }
    }
    else if (elementclass == "ston") {
        if (toolrem == "t pickaxe") {
            countSton++
            itSton.innerText = JSON.stringify(countSton)
            itSton.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/Stone1.jpg)"
            itSton.style.backgroundSize = "cover";
            element.className = "sky"

        }
    }
}
const items = document.getElementById("items")
items.addEventListener("click", () => {
    items.style.background = "white"
    items.style.boxSizing = "border-box"
    items.style.width = "10vw"
    items.style.height = "10vh"
    items.style.display = "grid"
    itTree.style.display = "inline"
    itLeaves.style.display = "inline"
    itLend.style.display = "inline"
    itSton.style.display = "inline"


})

const it = document.querySelectorAll(".it")
// for (let i of Array.from(it)) {
//     i.innerHTML()
// }

const body = document.getElementById("body")
const tool = document.querySelectorAll(".t")
for (let i of Array.from(tool)) {
    i.addEventListener("click", () => {
        toolrem = i.className
    })
}

