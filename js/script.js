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
const box = document.getElementById("box")
const items = document.getElementById("itemsid")
const body = document.getElementById("body")
const footer = document.getElementById("footer")
const axe = document.getElementById("axe")
const pickaxe = document.getElementById("pickaxe")
const shovel = document.getElementById("shovel")
const sword = document.getElementById("sword")
const it = document.querySelectorAll(".it")
const tool = document.querySelectorAll(".t")
const tools = document.getElementById("tools")
const store = document.getElementById("store")
const warehouse = document.getElementById("warehouse")
const wallet = document.getElementById("wallet")
const countwallet = document.getElementById("countwallet")
let boxopen = false
let storeopen = false
const buyTree = document.getElementById("buyTree")
const buyLeaves = document.getElementById("buyLeaves")
const buyLend = document.getElementById("buyLend")
const buySton = document.getElementById("buySton")
buyTree.className = "buyclose"
buyLeaves.className = "buyclose"
buyLend.className = "buyclose"
buySton.className = "buyclose"
countwallet.innerText = 1000
const listcontaner = []

for (let i = 1; i <= 24; i++) {
    listcontaner.push([])
    for (let y = 1; y <= 50; y++) {
        const element = document.createElement("div")
        contaner.appendChild(element)
        listcontaner[i - 1].push(element)
        element.className = "sky"
        if (i > 15) {
            element.className = "lend"
        }
        if (i > 20) {
            element.className = "ston"
        }
        element.addEventListener("click", () => {
            resources(i, y, element)
        })
        tree(i, y, element, a1)
        tree(i, y, element, a2)
        tree(i, y, element, a3)
    }
}

function tree(i, y, element, x) {
    if (i > 12 && (y == x || y == (x + 1)) && i < 16) {
        element.className = "tree"
    }
    else if (i == 10 && (y > (x - 1) && y < (x + 2))) {
        element.className = "leaves"
    } else if (i == 11 && (y > (x - 3) && y < (x + 4))) {
        element.className = "leaves"
    } else if (i == 12 && (y > (x - 5) && y < (x + 6))) {
        element.className = "leaves"
    }
}


function resources(i, y, element) {
    i = i - 1
    y = y - 1
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
        const Spirits = []
        for (let x = 0; x < listcontaner.length; x++) {
            for (let j = 0; j < listcontaner[x].length; j++) {
                if ((x == i + 1 && j == y) || (x == i - 1 && j == y) || (j == y - 1 && x == i) || (j == y + 1 && x == i)) {
                    Spirits.push(listcontaner[x][j]);
                    // console.log(listcontaner[x][j]);
                    
                }
            }
        }
        if (toolrem == "itTree") {
            for (let s of Spirits) {
                if (s.className == "tree" || s.className == "lend") {
                    if (countTree > 0) {
                        element.className = "tree"
                        countTree--
                        itTree.innerText = JSON.stringify(countTree)
                    }
                    if (countTree == 0) {
                        itTree.style.backgroundImage = null
                        itTree.innerText = ""
                        document.body.style.cursor = null;
                    } return
                }
            }
        } else if (toolrem == "itLeaves") {
            for (let s of Spirits) {
                if (s.className == "leaves" || s.className == "tree") {
                    if (countLeaves > 0) {
                        element.className = "leaves"
                        countLeaves--
                        itLeaves.innerText = JSON.stringify(countLeaves)
                    }
                    if (countLeaves == 0) {
                        itLeaves.style.background = null
                        itLeaves.innerText = ""
                        document.body.style.cursor = null;
                    } return
                }
            }
        } else if (toolrem == "itLend") {
            for (let s of Spirits) {
                if (s.className == "lend" || s.className == "ston") {
                    if (countLend > 0) {
                        element.className = "lend"
                        countLend--
                        itLend.innerText = JSON.stringify(countLend)
                    }
                    if (countLend == 0) {
                        itLend.style.background = null
                        itLend.innerText = ""
                        document.body.style.cursor = null;
                    } return
                }
            }
        } else if (toolrem == "itSton") {
            for (let s of Spirits) {
                if (s.className == "ston") {
                    if (countSton > 0) {
                        element.className = "ston"
                        countSton--
                        itSton.innerText = JSON.stringify(countSton)
                    }
                    if (countSton == 0) {
                        itSton.style.background = null
                        itSton.innerText = ""
                        document.body.style.cursor = null;
                        
                    } return
                }
            }
        }
    }
    let flag = true
    for (let t =  listcontaner.length-2; t >=0; t--) {            
        for (let l = 0; l < listcontaner[t].length; l++) {
            if (listcontaner[t][l].className == "tree") { 
                if(listcontaner[t+1][l].className != "tree"  && listcontaner[t+1][l].className != "lend") {
                    flag=false
                    for (let l2 =l; l2< listcontaner[t].length; l2++){
                        if(listcontaner[t][l2].className == "tree" || listcontaner[t][l2].className =="lend"){
                            if(listcontaner[t+1][l2].className == "tree" || listcontaner[t+1][l2].className =="lend"){
                                flag=true
                            }
                        }
                        else{
                            break
                        }
                    }
                    for (let l2 =l; l2>=0; l2--){                            
                        if(listcontaner[t][l2].className == "tree" || listcontaner[t][l2].className =="lend"){
                            if(listcontaner[t+1][l2].className == "tree" || listcontaner[t+1][l2].className =="lend"){
                                flag=true                                    
                            }
                        }
                        else{
                            break
                        }
                    }
                }
                if(flag!=true){
                    listcontaner[t][l].className="sky"
                    flag = true
                }
            }if (listcontaner[t][l].className == "leaves") { 
                if(listcontaner[t+1][l].className != "leaves"  && listcontaner[t+1][l].className != "tree") {
                    flag=false
                    for (let l2 =l; l2< listcontaner[t].length; l2++){
                        if(listcontaner[t][l2].className == "leaves" || listcontaner[t][l2].className =="tree"){
                            if(listcontaner[t+1][l2].className == "leaves" || listcontaner[t+1][l2].className =="tree"){
                                flag=true
                            }
                        }
                        else{
                            break
                        }
                    }
                    for (let l2 =l; l2>=0; l2--){                            
                        if(listcontaner[t][l2].className == "leaves" || listcontaner[t][l2].className =="tree"){
                            if(listcontaner[t+1][l2].className == "leaves" || listcontaner[t+1][l2].className =="tree"){
                                flag=true                                    
                            }
                        }
                        else{
                            break
                        }
                    }
                }
                if(flag!=true){
                    listcontaner[t][l].className="sky"
                    flag = true
                }
            }if (listcontaner[t][l].className == "lend") { 
                if(listcontaner[t+1][l].className != "lend"  && listcontaner[t+1][l].className != "ston") {
                    flag=false
                    for (let l2 =l; l2< listcontaner[t].length; l2++){
                        if(listcontaner[t][l2].className == "lend" || listcontaner[t][l2].className =="ston"){
                            if(listcontaner[t+1][l2].className == "lend" || listcontaner[t+1][l2].className =="ston"){
                                flag=true
                            }
                        }
                        else{
                            break
                        }
                    }
                    for (let l2 =l; l2>=0; l2--){                            
                        if(listcontaner[t][l2].className == "lend" || listcontaner[t][l2].className =="ston"){
                            if(listcontaner[t+1][l2].className == "lend" || listcontaner[t+1][l2].className =="ston"){
                                flag=true                                    
                            }
                        }
                        else{
                            break
                        }
                    }
                }
                if(flag!=true){
                    listcontaner[t][l].className="sky"
                    flag = true
                }
            }if (listcontaner[t][l].className == "ston") { 
                if(listcontaner[t+1][l].className != "ston") {
                    flag=false
                    for (let l2 =l; l2< listcontaner[t].length; l2++){
                        if(listcontaner[t][l2].className == "ston"){
                            if(listcontaner[t+1][l2].className == "ston"){
                                flag=true  
                            }
                        }
                        else{
                            break
                        }
                    }
                    for (let l2 =l; l2>=0; l2--){                            
                        if(listcontaner[t][l2].className == "ston" ){
                            if(listcontaner[t+1][l2].className == "ston"){
                                flag=true                                    
                            }
                        }
                        else{
                            break
                        }
                    }
                }
                if(flag!=true){
                    listcontaner[t][l].className="sky"
                    flag = true
                }
            }
        }
    }
}

box.addEventListener("click", () => {
    if (!(boxopen)) {
        items.className = "itemsplye"
        items.style.display = "grid"
        itTree.style.display = "inline-block"
        itLeaves.style.display = "inline-block"
        itLend.style.display = "inline-block"
        itSton.style.display = "inline-block"
        boxopen = true
    } else {
        items.style.display = "none"
        itTree.style.display = "none"
        itLeaves.style.display = "none"
        itLend.style.display = "none"
        itSton.style.display = "none"
        boxopen = false
    }
})

itTree.addEventListener("click", () => {
    if (countTree > 0) {
        toolrem = "itTree"
        document.body.style.cursor = `url("../imegs/tree-s.png"),auto`;
    }
})

itTree.addEventListener("dblclick", () => {
    if (countTree > 0) {
        countTree--
        countwallet.innerText = Number(countwallet.innerText) + 50
        itTree.innerText = JSON.stringify(countTree)
        if (countTree == 0) {
            itTree.style.backgroundImage = null
            itTree.innerText = ""
            document.body.style.cursor = null;
        }
    }
})

itLeaves.addEventListener("click", () => {
    if (countLeaves > 0) {
        toolrem = "itLeaves"
        document.body.style.cursor = `url("../imegs/leaf-s.png"),auto`;
    }
})

itLeaves.addEventListener("dblclick", () => {
    if (countLeaves > 0) {
        countLeaves--
        countwallet.innerText = Number(countwallet.innerText) + 50
        itLeaves.innerText = JSON.stringify(countLeaves)
        if (countLeaves == 0) {
            itLeaves.style.backgroundImage = null
            itLeaves.innerText = ""
            document.body.style.cursor = null;
        }
    }
})

itLend.addEventListener("click", () => {
    if (countLend > 0) {
        toolrem = "itLend"
        document.body.style.cursor = `url("../imegs/dirt-s.png"),auto`;
    }
})

itLend.addEventListener("dblclick", () => {
    if (countLend > 0) {
        countLend--
        countwallet.innerText = Number(countwallet.innerText) + 50
        itLend.innerText = JSON.stringify(countLend)
        if (countLend == 0) {
            itLend.style.backgroundImage = null
            itLend.innerText = ""
            document.body.style.cursor = null;
        }
    }
})

itSton.addEventListener("click", () => {
    if (countSton > 0) {
        toolrem = "itSton"
        document.body.style.cursor = `url("../imegs/rock-s.png"),auto`;
    }
})

itSton.addEventListener("dblclick", () => {
    if (countSton > 0) {
        countSton--
        countwallet.innerText = Number(countwallet.innerText) + 50
        itSton.innerText = JSON.stringify(countSton)
        if (countSton == 0) {
            itSton.style.backgroundImage = null
            itSton.innerText = ""
            document.body.style.cursor = null;
        }
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

store.addEventListener("click", () => {
    if (storeopen == false) {
        warehouse.className = "warehouse"
        warehouse.style.display = "grid"
        storeopen = true
    }
    else {
        warehouse.style.display = "none"
        storeopen = false
    }
})

buyTree.addEventListener("dblclick", () => {
    if ((Number(countwallet.innerText) - 50) >= 0) {
        countTree++
        itTree.innerText = JSON.stringify(countTree)
        itTree.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/wood1.png)";
        itTree.style.backgroundSize = "cover";
        countwallet.innerText = Number(countwallet.innerText) - 50
    }
})
buyLeaves.addEventListener("dblclick", () => {
    if ((Number(countwallet.innerText) - 50) >= 0) {
        countLeaves++
        itLeaves.innerText = JSON.stringify(countLeaves)
        itLeaves.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/leaves1.png)";
        itLeaves.style.backgroundSize = "cover";
        countwallet.innerText = Number(countwallet.innerText) - 50
    }
})
buyLend.addEventListener("dblclick", () => {
    if ((Number(countwallet.innerText) - 50) >= 0) {
        countLend++
        itLend.innerText = JSON.stringify(countLend)
        itLend.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/soil4.png)";
        itLend.style.backgroundSize = "cover";
        countwallet.innerText = Number(countwallet.innerText) - 50
    }
})
buySton.addEventListener("dblclick", () => {
    if ((Number(countwallet.innerText) - 50) >= 0) {
        countSton++
        itSton.innerText = JSON.stringify(countSton)
        itSton.style.backgroundImage = "url(https://2d-minecraft-game.vercel.app/assets/Stone1.jpg)"
        itSton.style.backgroundSize = "cover";
        countwallet.innerText = Number(countwallet.innerText) - 50
    }
})




