let choice = document.querySelectorAll(".hand");
let your = document.getElementsByClassName("your-score");
let computer = document.getElementsByClassName("comp-score");
let msg = document.querySelector("p");
 console.log(msg.innerHTML)



choice.forEach((element) => {
  element.addEventListener("click", () => {
    // your score
    let yourChoice = element.getAttribute("id");
    console.log("your score is :", yourChoice);
    playGame(yourChoice);
  });
});
let comScore = () => {
  let choices = ["stone", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return choices[randomIdx];
};


let playGame = (yourChoice) => {
  try {
    const comChoice = comScore();
    console.log("computer choice :", comChoice);
    if (yourChoice === comChoice) {
      console.log("game was draw");
      msg.innerText ="game was draw . play again !" ;

    } else  {
      let win = true;

       if (yourChoice === "stone") {
        // scissor,  paper
        win = comChoice === "paper" ? false : true;
      } else if (yourChoice === "paper") {
        // rock , scissor
        win = comChoice === "scissor" ? false : true;
      } else {
        win = comChoice === "stone" ? false : true;
        // console.log("you lose");
      }
      showResult(win);
    }
  } catch (error) {}
};

let yourScore = 0;

showResult = (win)=>{
  if(win){
    console.log("you are win")
    msg.innerText = "you are win & computer is lost ";
    yourScore ++;
    yourScore.innerText = yourScore;
    
  }else{
    console.log("you lose")
    msg.innerText = "you are lose & computer is win" ;

  }
}
