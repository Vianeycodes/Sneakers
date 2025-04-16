/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */







//   1: storing inputs and setting up-------------------------------------

let submittedPrices = []; // store guesses

function submitPrice() {
  const input = document.getElementById("priceInput").value;
  if (input) {
    submittedPrices.push(Number(input)); // Add number to array
    document.getElementById("priceInput").value = ""; // Clear input to add more if they want
    alert("Thanks for your price"); // Confirm to user input recieved
  }
}
// showing the average price
function togglePriceResults() {
  const resultsDiv = document.getElementById("priceResults");
  if (resultsDiv.style.display === "none") {
    if (submittedPrices.length > 0) {
      const sum = submittedPrices.reduce((a, b) => a + b, 0);
      const avg = (sum / submittedPrices.length).toFixed(2); // round to  2 decimal places
      resultsDiv.innerText = `Average user guess: $${avg}`;
    } else {
      resultsDiv.innerText = "No submissions yet.";
    }
    resultsDiv.style.display = "block";  //all this to make sure there is a valid input so that the average will be calculated correctly
  } else {
    resultsDiv.style.display = "none";
  }
}






//  2: Poll-------------------------------------------------------------

let uglyVotes = { yes: 0, no: 0 }; // Store poll counts

function voteUgly(answer) {
    //yes or no vote
  if (answer === "yes" || answer === "no") {
    uglyVotes[answer]++; //this is to increase the vote count
    updateUglyPoll(); // updates on screen automatically
  }
}
//for poll results
function updateUglyPoll() {
  const total = uglyVotes.yes + uglyVotes.no;//adding votes
  const yesPercent = total ? ((uglyVotes.yes / total) * 100).toFixed(1) : 0; //only if its less than 1 we are findning the percent
  const noPercent = total ? ((uglyVotes.no / total) * 100).toFixed(1) : 0;

  document.getElementById("uglyResults").innerText =//updating current votes sumbited
    `Yes: ${uglyVotes.yes} (${yesPercent}%) | No: ${uglyVotes.no} (${noPercent}%)`;
}







// 3: Sneaker Quiz----------------------------------------------------------

function checkQuiz() {
  const value = document.getElementById("quizSelect").value;//getting answer selected
  let resultText = "";//empty to store

  // Match answer to sneaker type
  if (value === "hype") {
    resultText = " Travis Scott Jordan 1s";
  } else if (value === "classic") {
    resultText = " Air Force 1s ";
  } else if (value === "comfort") {
    resultText = "Yeezy Boost 350 ";
  } else {
    resultText = "Please select an answer."; //if nothing is selected but button is pressed
  }

  document.getElementById("quizResult").innerText = resultText;//display results
}






// 4: Sneaker Trivia -----------------------------------------------------

function checkTrivia(answer) {
  let correct = "Nike"; // Correct answer

  if (answer === correct) {
    document.getElementById("triviaResult").innerText = " Correct! ";
  } else {
    document.getElementById("triviaResult").innerText = " Nope!";
  }
}





// 5: Guess the Number Game but one try-------------------------------------

const correctNumber = 2388; // correct number of sneakers

// submit the user's guess
function submitGuess() {
  const guess = document.getElementById("guessInput").value;//getting user input
  const guessResult = document.getElementById("guessResult");

  // check if it is a number
  if (guess && !isNaN(guess)) {
    if (Number(guess) === correctNumber) {
      guessResult.innerText = " Correct! Jordan Michael Geller has 2,388 sneakers in his collection.";
    } else {
      guessResult.innerText = `Nope! The correct number is 2,388 sneakers. `;
    }

      // only one try
      document.getElementById("guessInput").disabled = true;
      document.getElementById("guessButton").disabled = true;

    } else {
      guessResult.innerText = "Please enter a valid number.";
    }
  }
