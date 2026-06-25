const boxes =  document.querySelectorAll(".box")
const reset = document.querySelector("#reset")
const msg = document.querySelector("#msg")
const msgContainer = document.querySelector(".msg-container")
const newGame = document.querySelector("#new")

let trun0 =true;

const winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(trun0){
            box.innerHTML = "O";
            trun0 = false;
        } else{
            box.innerHTML = "X"
            trun0 = true;
        }
        checkWinner()
        box.disabled = true;
    })
})
const resetGame = () =>{
    trun0 = true;
    msgContainer.classList.add("hide")
    enableBox()
}
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";

    }
}
const disabledBox = () =>{
    for(let  box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerHTML = `congratlation your Winner ${winner}`
    msgContainer.classList.remove("hide")
    disabledBox()
}
const Draw = () =>{
    msg.innerHTML = "Your Game is Draw please try again"
    msgContainer.classList.remove("hide")
}
const checkWinner = () =>{
    for(let pattern of winnerPattern){
        let posval1 = boxes[pattern[0]].innerHTML
        let posval2 = boxes[pattern[1]].innerHTML
        let posval3 = boxes[pattern[2]].innerHTML
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3 && posval3 === posval1){
                console.log("Winner", posval1);
                showWinner(posval1)
            } 
            } 
        }
    }
reset.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)
