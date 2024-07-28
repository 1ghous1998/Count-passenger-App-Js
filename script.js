let countEl = document.getElementById("count-el")
let savePara = document.getElementById("para-el")


let count = 0

function increment(){
    //  count += 1
     count = count + 1
    countEl.textContent = count
}

function decrement(){
    //  count += 1
     count = count - 1
    countEl.textContent = count
}

function save(){
    let countStr = " (" + count + ")" + " - "
    //savePara.textContent = savePara.textContent + countStr
    savePara.textContent += countStr
    countEl.textContent = 0
    count = 0
}

