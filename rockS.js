let userScore = 0;
let computerScore = 0;

// let header = document.querySelector("#header").innerHTML="ram";

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara =document.querySelector("#user_scroe");
const compScorePara =document.querySelector("#computer_score");

const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    // gen. rock paper scissor
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


};

const drawGame = () => {
    console.log("game was draw!");
    msg.innerText ="game was deaw!";
    msg.style.backgroundColor="pink";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML= userScore;

        console.log("you win!");
        msg.innerText =`you win! your ${userChoice} is beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScorePara.innerHTML= computerScore;
        console.log("you lose!");
        msg.innerText =`you lose! ${compChoice} is beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame = (userChoice)=>{
    console.log("user choice",userChoice);
    //genrate computer chocie
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
     }
     else{
        let userWin = true;
        if(userChoice==="rock"){
            //paper scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice ==="paper"){
            //rock scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
    

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});

