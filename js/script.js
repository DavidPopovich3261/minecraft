let countTree = 0
let countLeaves = 0
let countLend = 0
let countSton = 0
const a1 = (Math.floor(Math.random() * 50))
const a2 = (Math.floor(Math.random() * 50))
const a3 = (Math.floor(Math.random() * 50))
let toolrem = ""
const itTree = document.getElementById("itTree")
const itLeaves = document.getElementById("itLeaves")
const itLend = document.getElementById("itLend")
const itSton = document.getElementById("itSton")
const box =document.getElementById("box")
const items = document.getElementById("itemsid")
const body = document.getElementById("body")
const axe = document.getElementById("axe")
const pickaxe = document.getElementById("pickaxe")
const shovel = document.getElementById("shovel")
const sword = document.getElementById("sword")
const it = document.querySelectorAll(".it")
const tool = document.querySelectorAll(".t")
let boxopen=false

for (let i = 1; i <= 1200; i++) {
    const element = document.createElement("div")
    contaner.appendChild(element)
    element.addEventListener("click", () => {
        // console.log(toolrem);
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

function tree(i, element, x,) {
    if (i > 550 && (i % 50 == x || i % 50 == (x + 1)) && i < 751) {
        element.className = "tree"
    }
    else if (i > 400 && (i % 50 > (x - 1) && i % 50 < (x + 2)) && i < 451) {
        element.className = "leaves"
        console.log(element);

    } else if (i > 450 && (i % 50 > (x - 3) && i % 50 < (x + 4)) && i < 501) {
        element.className = "leaves"
    } else if (i > 500 && (i % 50 > (x - 5) && i % 50 < (x + 6)) && i < 551) {
        element.className = "leaves"
    }
}

itTree.addEventListener("click", () => {
    if (countTree > 0) {

        toolrem = "itTree"
        document.body.style.cursor = `url("../imegs/tree-s.png"),auto`;
    }

})
itLeaves.addEventListener("click", () => {
    if (countLeaves > 0) {

        toolrem = "itLeaves"
        document.body.style.cursor = `url("../imegs/leaf-s.png"),auto`;
    }

})
itLend.addEventListener("click", () => {
    if (countLend > 0) {
        toolrem = "itLend"
        document.body.style.cursor = `url("../imegs/dirt-s.png"),auto`;
    }

})
itSton.addEventListener("click", () => {
    if (countSton > 0) {

        toolrem = "itSton"
        document.body.style.cursor = `url("../imegs/rock-s.png"),auto`;
    }

})

function resources(element) {
    const elementclass = element.className
    if (elementclass == "tree") {
        if (toolrem == "axe") {
            countTree++
            itTree.innerText = JSON.stringify(countTree)
            itTree.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/wood1.png)";
            itTree.style.backgroundSize = "cover";
            element.className = "sky"
        }
    }
    else if (elementclass == "leaves") {
        if (toolrem == "sword") {
            countLeaves++
            itLeaves.innerText = JSON.stringify(countLeaves)
            itLeaves.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/leaves1.png)";
            itLeaves.style.backgroundSize = "cover";
            element.className = "sky"

        }
    }
    else if (elementclass == "lend") {
        if (toolrem == "shovel") {
            countLend++
            itLend.innerText = JSON.stringify(countLend)
            itLend.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/soil4.png)";
            itLend.style.backgroundSize = "cover";
            element.className = "sky"

        }
    }
    else if (elementclass == "ston") {
        if (toolrem == "pickaxe") {
            countSton++
            itSton.innerText = JSON.stringify(countSton)
            itSton.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/Stone1.jpg)"
            itSton.style.backgroundSize = "cover";
            element.className = "sky"
        }
    }
    else if (elementclass == "sky") {
        if (toolrem == "itTree") {
            if (countTree > 0) {
                element.className = "tree"
                countTree--
                itTree.innerText = JSON.stringify(countTree)
            }
            if (countTree == 0) {
                itTree.style.backgroundImage = null
                itTree.innerText = ""
                document.body.style.cursor = null;

            }
        } else if (toolrem == "itLeaves") {
            if (countLeaves > 0) {
                element.className = "leaves"
                countLeaves--
                itLeaves.innerText = JSON.stringify(countLeaves)
                console.log(element);
            }
            if (countLeaves == 0) {
                itLeaves.style.background = null
                itLeaves.innerText = ""
                document.body.style.cursor = null;

            }
        } else if (toolrem == "itLend") {
            if (countLend > 0) {
                element.className = "lend"
                countLend--
                itLend.innerText = JSON.stringify(countLend)
            }
            if (countLend == 0) {
                itLend.style.background = null
                itLend.innerText = ""
                document.body.style.cursor = null;

            }
        } else if (toolrem == "itSton") {
            if (countSton > 0) {
                element.className = "ston"
                countSton--
                itSton.innerText = JSON.stringify(countSton)
            }
            if (countSton == 0) {
                itSton.style.background = null
                itSton.innerText = ""
                document.body.style.cursor = null;

            }
        }
    }
}

box.addEventListener("click", () => {    
    if(!(boxopen)){
        items.className = "itemsplye"
        items.style.display="grid"
        itTree.style.display = "inline-block"
        itLeaves.style.display = "inline-block"
        itLend.style.display = "inline-block"
        itSton.style.display = "inline-block"
        boxopen=true
    }else{
        items.style.display="none"
        itTree.style.display = "none"
        itLeaves.style.display = "none"
        itLend.style.display = "none"
        itSton.style.display = "none"
        boxopen=false
    }
})


axe.addEventListener("click", () => {
    toolrem = "axe"
    document.body.style.cursor = `url("../imegs/axe-cursor.png"),auto`;
})

pickaxe.addEventListener("click", () => {
    toolrem = "pickaxe"
    document.body.style.cursor = `url("../imegs/pickaxe-s.png"),auto`;

})

shovel.addEventListener("click", () => {
    toolrem = "shovel"
    document.body.style.cursor = `url("../imegs/shovel-s.png"),auto`;

})

sword.addEventListener("click", () => {
    toolrem = "sword"
    document.body.style.cursor = `url("../imegs/sword (1).png"),auto`;

})


