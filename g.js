let randomNum = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  let msg = "";

  if (isNaN(guess)) {
    msg = "⚠️ Please enter a number!";
  } else if (guess === randomNum) {
    msg = "🎉 Correct! You guessed it!";
  } else if (guess < randomNum) {
    msg = "⬆️ Too Low! Try again.";
  } else {
    msg = "⬇️ Too High! Try again.";
  }

  document.getElementById("message").innerText = msg;
}

function resetGame() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guess").value = "";
  document.getElementById("message").innerText = "Game reset! Start guessing again 🎯";
}
