let loseHeading = document.querySelector(".showHeading");
let restartgameBtn = document.querySelector(".restart");
let newgameBtn = document.querySelector(".startNewGame");
let imaged = document.querySelector(".showImg");
let buttonsBox = document.querySelectorAll(".box");
let genCompChoice = Math.floor(Math.random() * 13);
let clickedCount = [];
let count = 0;

buttonsBox.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        count++;
        let userChoice = parseInt(boxes.getAttribute("btnn"));
        if (!clickedCount.includes(userChoice)) {
            clickedCount.push(userChoice);
            boxes.innerText = count + "x";
            boxes.disabled = true;
        }

        if (clickedCount.includes(genCompChoice)) {
            alert("The Red Button Clicked")
            imaged.classList.remove("hideImg") //<-- We have to first remove the hideImg classList This is Important to remove
            boxes.replaceWith(imaged)
            newgameBtn.classList.remove("hiddenBtn")
            loseHeading.classList.remove("loseHide")
            boxes.disabled = false
            disablebox()
        }
    })
})

let reStarting = () => {

    buttonsBox.forEach((boxes) => {
        let userChoice = parseInt(boxes.getAttribute("btnn"))
        if (userChoice === genCompChoice) {
            imaged.replaceWith(boxes)
        }
    })


    for (let boxed of buttonsBox) {
        boxed.disabled = false
        boxed.innerText = ""
    }

    clickedCount = []
    count = 0;
    loseHeading.classList.add("loseHide")
    genCompChoice = Math.floor(Math.random() * 13)
    newgameBtn.classList.add("hiddenBtn")
}


let disablebox = () => {
    for (let box of buttonsBox) {
        box.disabled = true
    }
}

restartgameBtn.addEventListener("click", reStarting);
newgameBtn.addEventListener("click", reStarting);

