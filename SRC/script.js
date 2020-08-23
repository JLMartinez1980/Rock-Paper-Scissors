function rockPaperScissors(input) {
  const gameChoices = ['rock', 'paper', 'scissors'];
  let playerOne = input;
  const playerTwo = gameChoices[Math.floor(Math.random()*gameChoices.length)];
  console.log('playerTwo:', playerTwo, 'input:', input);

  //Cat's game
  if (playerOne === playerTwo) {
    return `${playerOne} vs ${playerTwo}: tie game!`;
  };

  //player one paper vs player 2 scissors
  if ((playerOne !== 'rock') && (playerTwo === 'scissors')) {
    return `${playerOne} vs ${playerTwo}: ${playerTwo} wins`;
  };

  //player one paper vs player two rock
  if((playerOne !== 'scissors') && (playerTwo === 'rock')) {
    return `${playerOne} vs ${playerTwo}: ${playerOne} wins`
  };

  //player one rock vs player two Paper
  if ((playerOne !== 'scissors') && (playerTwo === 'paper')) {
    return `${playerOne} vs ${playerTwo}: ${playerTwo} wins`;
  };

  //player one rock vs player two scissors
  if((playerOne !== 'paper') && (playerTwo === 'scissors')) {
    return `${playerOne} vs ${playerTwo}: ${playerOne} wins`;
  };

  //player one scissors vs player two rock
  if ((playerOne !== 'paper') && (playerTwo === 'rock')) {
    return `${playerOne} vs ${playerTwo}: ${playerTwo} wins`;
  };

  //player one scissors vs player two paper
  if ((playerOne !== 'rock') && (playerTwo === 'paper')) {
    return `${playerOne} vs ${playerTwo}: ${playerTwo} wins`;
  }

}

let output = rockPaperScissors('rock') //'paper vs rock: paper wins!
console.log(output);
