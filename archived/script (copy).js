let randomColorsForQuestions = [
  "#F03D5B",
  "#FF860D",
  "#7239E5",
  "#FFBB33",
  "#0BB05D",
  "#0278FE",
];

// Global variables to store the questions and current index
let questionsForCurrentMode = [];
let currentQuestionIndex = 0;

let waitingMessages = [
  "Cracking the ice... hang tight!",
  "Cooking up some cool icebreakers for you...",
  "Chipping away at the ice block of awkwardness...",
  "Preparing a fresh batch of ice-melting questions...",
  "Creating conversational magic. Stay tuned...",
  "Just a moment while we whip up some fun questions...",
  "Hold on tight! We're drilling through the ice...",
  "Wait a moment, we're breaking the ice for you...",
  "Working on the perfect blend of questions to warm up your conversation...",
  "Hang in there! Your social lubricant is on its way...",
  "Crafting some questions to melt even the iciest of rooms...",
  "Sit tight, your conversation starters are brewing...",
  "Hold on! Your ice-melting artillery is almost ready...",
];

let totalQuestionsInAdvancedMode = null;
let globalMode = "basic";

document
  .getElementById("advanced-mode-button")
  .addEventListener("click", function () {
    switchToAdvancedMode();
  });

function fetchModes() {
  return fetch("https://icebreakre-generator.onrender.com/modes")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching modes:", error));
}

function fetchQuestionsForMode(modeId) {
  return fetch(`https://icebreakre-generator.onrender.com/questions/${modeId}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) =>
      console.error("Error fetching questions for mode:", error)
    );
}

function switchToAdvancedMode() {
  // Show the form
  document.getElementById("icebreaker-form").style.display = "block";
  // Hide the "Another question" and "Advanced mode" buttons
  document.getElementById("next-question-button").style.display = "none";

  document.getElementById("advanced-mode-button").style.display = "none";
  // Show the "Basic Mode" button
  document.getElementById("basic-mode-button").style.display = "block";

  // Hide the progress bar and the icebreaker question section
  document.getElementById("progress-bar").style.display = "none";
  document.getElementById("question-display").style.display = "none";
}

/**
 * ADVANCED MODE
 */

document
  .getElementById("basic-mode-button")
  .addEventListener("click", function () {
    // Hide the form and "Basic Mode" button
    document.getElementById("icebreaker-form").style.display = "none";
    this.style.display = "none";
    // Show the "Another question" and "Advanced mode" buttons
    document.getElementById("next-question-button").style.display = "block";
    document.getElementById("advanced-mode-button").style.display = "block";

    // Hide the progress bar
    document.getElementById("progress-bar").style.display = "none";
    // Select a random question
    var randomQuestion = getRandomQuestion();
    // Display the question
    document.getElementById("question-display").textContent = randomQuestion;
    document.getElementById("question-display").style.display = "block";
  });

document
  .getElementById("icebreaker-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    var purpose = document.getElementById("purpose").value;
    var time = document.getElementById("time").value;
    var participants = document.getElementById("participants").value.split(" ");

    // Show the loader
    var randomWaitingMessage =
      waitingMessages[Math.floor(Math.random() * waitingMessages.length)] +
      "This usually can take up to 50 seconds, so please wait for a moment for the magic to happen!";
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").textContent = randomWaitingMessage;

    // Send a request to the back-end with the user's input
    const response = await fetch(
      "https://icebreakre-generator.onrender.com/generate-questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        main: JSON.stringify({
          purpose: purpose,
          time: time,
          participants: participants,
        }),
      }
    );
    let data = await response.json();
    let questions = Object.values(data.generatedQuestions);

    totalQuestionsInAdvancedMode = questions.length;

    // Hide the loader
    document.getElementById("loader").style.display = "none";

    // Show the progress bar and the icebreaker question section
    document.getElementById("progress-bar").style.display = "block";
    document.getElementById("question-display").style.display = "block";

    // Hide the form
    document.getElementById("icebreaker-form").style.display = "none";
    // Display the first participant and question and show the "Next" button
    document.getElementById("question-display").textContent = questions[0];
    document.getElementById("next-button").style.display = "block";
    // Store the remaining participants and questions for later
    window.participants = participants.slice(1);
    window.questions = questions.slice(1);
    // Convert the time from minutes to seconds and start the timer
    window.countdown = startTimer(time * 60);
  });

function randomizeBackgroundColor() {
  var mainElement = document.querySelector("main");
  console.log(mainElement);
  var randomColor =
    randomColorsForQuestions[
      Math.floor(Math.random() * randomColorsForQuestions.length)
    ];
  console.log(randomColor);
  // mainElement.style["background-color"] = randomColor;
}

document.getElementById("next-button").addEventListener("click", function () {
  randomizeBackgroundColor();

  // Display the next participant and question
  var nextParticipant = window.participants.shift();
  var nextQuestion = window.questions.shift();
  if (nextParticipant && nextQuestion) {
    document.getElementById("question-display").textContent = nextQuestion;
    // Update the progress bar
    var progressBar = document.querySelector("#progress-bar div");
    var totalQuestions = totalQuestionsInAdvancedMode;
    var answeredQuestions =
      totalQuestionsInAdvancedMode - window.participants.length;
    progressBar.style.width = (answeredQuestions / totalQuestions) * 100 + "%";
  } else {
    // If there are no more participants or questions, show the "Congratulations" screen
    document.getElementById("question-display").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("congratulations").style.display = "block";
    // Stop the timer
    clearInterval(window.countdown);
  }
});

document
  .getElementById("restart-button")
  .addEventListener("click", function () {
    // Reset the form and hide the "Congratulations" screen
    window.location.reload();
  });

function startTimer(duration) {
  var timer = duration,
    minutes,
    seconds;
  var display = document.querySelector("#timer-display");
  var countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      display.textContent = "Time's up!";
    }
  }, 1000);
  return countdown; // Return the interval ID
}

/**
 * BASIC MODE
 */

// On page load, read the mode from the URL parameter and load the first question for that mode
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get("mode");
  if (mode) {
    loadQuestionForMode(mode);
  } else {
    loadQuestionForMode("basic");
  }
});

// Function to load the next question
document
  .getElementById("next-question-button")
  .addEventListener("click", function () {
    if (currentQuestionIndex < questionsForCurrentMode.length - 1) {
      currentQuestionIndex++; // Increment the index to point to the next question
    } else {
      currentQuestionIndex = 0; // Reset index if it's the last question
    }
    displayCurrentQuestion();
  });

function getRandomQuestion(mode) {
  fetchModes().then((modes) => {
    const selectedMode = modes.find((m) => m.name.toLowerCase() === mode);
    if (selectedMode) {
      fetchQuestionsForMode(selectedMode.id).then((questions) => {
        if (questions.length > 0) {
          const randomIndex = Math.floor(Math.random() * questions.length);
          document.getElementById("question-display").textContent =
            questions[randomIndex].content;
        } else {
          document.getElementById("question-display").textContent =
            "No questions found for this mode.";
        }
      });
    }
  });
}

function switchToRegularMode() {
  var randomQuestion = getRandomQuestion();
  // Display the question and show the "Start Timer" button
  document.getElementById("question-display").textContent = randomQuestion;
  document.getElementById("icebreaker-form").style.display = "none";
}

function handleIcebreakerModes(urlParams) {
  const advancedMode = urlParams.get("advanced_mode");
  const mode = urlParams.get("mode");

  // Set the globalMode variable based on URL parameters
  if (advancedMode) {
    globalMode = "advanced";
  } else if (mode) {
    globalMode = mode; // Assuming that the mode names in the URL match the mode names in the database
  } else {
    globalMode = "basic"; // Default to 'basic' if no mode is specified
  }
}

// Function to display the current question
function displayCurrentQuestion() {
  if (
    questionsForCurrentMode.length > 0 &&
    currentQuestionIndex < questionsForCurrentMode.length
  ) {
    document.getElementById("question-display").textContent =
      questionsForCurrentMode[currentQuestionIndex].content;
    randomizeBackgroundColor();
  } else {
    document.getElementById("question-display").textContent =
      "No more questions available.";
  }
}

// Function to load the initial question for a mode
function loadQuestionForMode(mode) {
  fetchModes().then((modes) => {
    const selectedMode = modes.find(
      (m) => m.name.toLowerCase() === mode.toLowerCase()
    );
    if (selectedMode) {
      fetchQuestionsForMode(selectedMode.id).then((questions) => {
        questionsForCurrentMode = questions;
        currentQuestionIndex = 0; // Start from the first question
        if (questionsForCurrentMode.length > 0) {
          displayCurrentQuestion();
        } else {
          document.getElementById("question-display").textContent =
            "No questions found for this mode.";
        }
      });
    } else {
      document.getElementById("question-display").textContent =
        "Mode not found.";
    }
  });
}
