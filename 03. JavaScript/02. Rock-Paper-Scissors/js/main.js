// First Interactive Game : Rock-Paper-Scissors

let playGame = confirm("Do you want to play \'Rock-Paper-Scissors\'?");

if(playGame)
{
  let playAgain;

  do
  {
    let playerChoice = prompt("Please enter a choice :\n1. Rock\n2. Paper\n3. Scissors");

    if(!playerChoice)
    {
      alert("Maybe you changed your mind. In Sha Allah next time.");
      break;
    }
    else if(playerChoice !== "1" && playerChoice !== "2" && playerChoice !== "3")
    {
      playAgain = confirm("Invalid choice. Play again?");
    }
    else
    {
      let playerOne;

      switch(parseInt(playerChoice))
      {
        case 1: playerOne = "Rock";
                break;
        case 2: playerOne = "Paper";
                break;
        case 3: playerOne = "Scissors";
                break;
      }

      let array = ["Rock", "Paper", "Scissors"];
      let computerChoice = Math.floor(3*Math.random());
      let computer = array[computerChoice];

      let result =
      (playerOne === computer)
      ? `You : ${playerOne}\nComputer : ${computer}\n\nTie game!`
      : (playerOne === "Rock" && computer === "Paper")
      ? `You : ${playerOne}\nComputer : ${computer}\n\nComputer won the game!`
      : (playerOne === "Paper" && computer === "Scissors")
      ? `You : ${playerOne}\nComputer : ${computer}\n\nComputer won the game!`
      : (playerOne === "Scissors" && computer === "Rock")
      ? `You : ${playerOne}\nComputer : ${computer}\n\nComputer won the game!`
      : `You : ${playerOne}\nComputer : ${computer}\n\nYou won the game!`

      playAgain = confirm(result + " Play again?");
    }

    if(playAgain)
    {
      continue;
    }
    else
    {
      alert("Okay. Thank you.");
    }
  } while(playAgain);
}
else
{
  alert("Okay. In Sha Allah next time.");
}