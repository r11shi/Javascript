let box1 = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContent = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; // playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 8],
    [2, 4, 6],
    [3, 4, 8],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContent.classList.add("hide");
}


box1.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box clicked");
    if(turnO){
        box.innerText = "O";
        box.style.color = "red";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    });
});

const enableBoxes = () =>{
    for(let box of box1){
        box.disabled =false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let box of box1){
        box.disabled =true;
    }
}
const shoWinner = (winner) =>{
    msg.innerHTML = `Congratulations , Winner is ${winner}`;
    msgContent.classList.remove("hide");
    disableBoxes();
}

const checkWinner= () =>{
    for(let pattern of winPatterns){
    let pos1Val = box1[pattern[0]].innerText;
    let pos2Val = box1[pattern[1]].innerText;
    let pos3Val = box1[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val!= "" && pos3Val!= ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            // console.log('WINNER',pos1Val);
            shoWinner(pos1Val);
        }
    }
  };
}

newGameBtn.addEventListener("click", resetGame);
resetGameBtn.addEventListener("click", resetGame);