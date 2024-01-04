// Array of random icebreaker questions
var randomQuestions = [
  "If you could have any superpower, what would it be and why?",
  "What was the last book you read and would you recommend it?",
  "If you could visit any place in the world, where would you choose to go and why?",
  "What's the most interesting thing you've learned recently?",
  "If you could only eat one food for the rest of your life, what would it be?",
  "What's your favorite thing to do in your free time?",
  "What's the most adventurous thing you've ever done?",
  "If you could spend a day with any celebrity, who would it be and why?",
  "What's your favorite movie or TV show and why?",
  "If you could have dinner with anyone from history, who would it be and why?",
  "What's your favorite hobby or pastime?",
  "What's your dream job?",
  "If you could live anywhere in the world, where would it be?",
  "What's your favorite animal and why?",
  "What's the most challenging thing you've ever done?",
  "What's your earliest memory?",
  "What's your favorite season and why?",
  "If you could learn any skill, what would it be?",
  "What's your favorite type of music?",
  "What's your favorite family tradition?",
  "What's your favorite type of food?",
  "What's your favorite quote or saying?",
];

var halloweenQuestions = [
  "If you could be any Halloween monster for the night (like werewolf 🐺, vampire 🧛, or zombie 🧟), what would you pick and what spooky activities would you get up to?",
  "If you woke up on Halloween morning trapped in a real haunted house (like the Winchester Mystery House or the LaLaurie Mansion), what or who would you want by your side, and what would be the first thing you'd do?",
  "If you could invite any famous celebrities or historical figures - living or dead - to your Halloween party, who would you choose and why?",
  "If you had unlimited money to create the most epic, creative Halloween costume ever, what would you dress up as?",
  "If you could pick any famously haunted location to spend Halloween night (like the Stanley Hotel or McKamey Manor), where would you go?",
  "If you could only eat one Halloween candy for the rest of your life, what would you choose - Snickers, Reese's, Skittles, or M&M's?",
  "If you could have any cool supernatural ability for just Halloween night, what power would you want and what would you plan for?",
  "If you had to dress up as your absolute worst fear for Halloween (like spiders 🕷️, clowns 🤡, or death 💀), what would your costume look like?",
  "If you were invisible for Halloween night, would you play tricks on people? What hilarious pranks would you pull?",
  "If you could throw a Halloween party anywhere in the world, where would you choose to host your monster bash?",
  "If you could transform into your favorite Halloween character (like a witch 🧙‍♀️, pirate 🏴‍☠️, or black cat 🐈‍⬛), for a whole week, who or what would you be?",
  "If you were dared to spend Halloween night in an infamously haunted graveyard, would you do it? How would you prepare yourself?",
  "If you woke up on Halloween with real magical powers, what fun spells or curses would you try to cast first?",
  "If you had to eat a meal made of gross Halloween ingredients (like eyeballs 👁️, worms 🐛, and pig's blood 🩸) for $1,000, could you stomach it?",
  "If you woke up as a real ghost on Halloween, what places would you love to haunt first?",
  "What's your most embarrassing childhood Halloween memory?",
  "What's the biggest Halloween party foul you've ever witnessed?",
  "What mythological monster would you most want to meet in real life?",
  "What horror movie or survival movie do you think you could have survived if you were a character in it?",
  "If you could have the best Halloween party ever, what theme would you want for your party?"
];

let randomChristmasQuestions = [
  "If you could be one of Santa's reindeer, which one would you be and why?",
  "What's the most unusual gift you've ever received for Christmas?",
  "Which Christmas movie character do you relate to the most and why?",
  "What's your favorite Christmas song, and what memory is attached to it?",
  "If you could have any celebrity over for Christmas dinner, who would it be and why?",
  "What's the funniest thing that ever happened to you during the holidays?",
  "What would it be like if you could invent a new holiday treat?",
  "What's the best handmade gift you've ever given or received?",
  "Which holiday tradition would you love to start in your family or circle of friends?",
  "If you were Santa Claus, what new policy would you introduce in the North Pole?",
  "Share a unique family tradition you have for Christmas.",
  "If you could turn any movie into a Christmas movie, which one would it be, and what would the plot twist be?",
  "What's one thing you always wanted for Christmas as a child but never received?",
  "If Christmas trees were sentient and could pick their own decorations, what style would they choose?",
  "You're in charge of Santa's playlist for his Christmas Eve journey. What surprising song do you add?",
  "What would it be if you could invent a silly new Christmas tradition?",
  "You're now in charge of the North Pole's IT department. What's the most common tech support request from the elves?",
  "If Santa could only deliver gifts via drone this year, what mishaps do you predict?",
  "If you could replace all the snow in a snow globe with something else, what would it be?",
  "What would it look like if you could design a new outfit for Santa?",
  "If you could give Santa a new mode of transportation, what would it be?",
  "If Christmas were in summer, what new traditions would you start?",
  "Imagine a Christmas where all the gifts are invisible. How do you find yours?",
  "What would be the most unexpected thing to find under your Christmas tree?"
];


let randomColorsForQuestions = [
  "#F03D5B",
  "#FF860D",
  "#7239E5",
  "#FFBB33",
  "#0BB05D",
  "#0278FE"
];

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
  "Hold on! Your ice-melting artillery is almost ready..."
];

let totalQuestionsInAdvancedMode = null;
let globalMode = 'basic';

document
  .getElementById("advanced-mode-button")
  .addEventListener("click", function() {
    switchToAdvancedMode();
  });

function switchToAdvancedMode() {
  // Show the form
  document.getElementById('icebreaker-form').style.display = 'block';
  // Hide the "Another question" and "Advanced mode" buttons
  document.getElementById('next-question-button').style.display = 'none';

  document.getElementById('advanced-mode-button').style.display = 'none';
  // Show the "Basic Mode" button
  document.getElementById('basic-mode-button').style.display = 'block';

  // Hide the progress bar and the icebreaker question section
  document.getElementById('progress-bar').style.display = 'none';
  document.getElementById('question-display').style.display = 'none';
}


/**
 * ADVANCED MODE
 */

document
  .getElementById("basic-mode-button")
  .addEventListener("click", function() {
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
  .addEventListener("submit", async function(event) {
    event.preventDefault();
    var purpose = document.getElementById("purpose").value;
    var time = document.getElementById("time").value;
    var participants = document.getElementById("participants").value.split(" ");

    // Show the loader
    var randomWaitingMessage = waitingMessages[Math.floor(Math.random() * waitingMessages.length)] + "This usually can take up to 50 seconds, so please wait for a moment for the magic to happen!"
    document.getElementById('loader').style.display = 'block';
    document.getElementById('loader').textContent = randomWaitingMessage;


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
  var mainElement = document.querySelector('main');
  console.log(mainElement);
  var randomColor = randomColorsForQuestions[Math.floor(Math.random() * randomColorsForQuestions.length)];
  console.log(randomColor);
  mainElement.style["background-color"] = randomColor;
}

document.getElementById("next-button").addEventListener("click", function() {

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
  .addEventListener("click", function() {
    // Reset the form and hide the "Congratulations" screen
    window.location.reload();
  });

function startTimer(duration) {
  var timer = duration,
    minutes,
    seconds;
  var display = document.querySelector("#timer-display");
  var countdown = setInterval(function() {
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


document.addEventListener('DOMContentLoaded', function() {
  // Detect if the URL contains an `advanced_mode` parameter, and click to open Advanced Mode.
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  globalMode = handleIcebreakerModes(urlParams);
  if (globalMode == 'advanced') {
    switchToAdvancedMode();
  } else
    switchToRegularMode();
});

document
  .getElementById("next-question-button")
  .addEventListener("click", function() {

    randomizeBackgroundColor();
    // Select a random question
    var randomQuestion =
      getRandomQuestion();
    // Display the question
    document.getElementById("question-display").textContent = randomQuestion;
  });

function getRandomQuestion() {
  if (globalMode == 'halloween') {
    return halloweenQuestions[Math.floor(Math.random() * halloweenQuestions.length)];
  } else if (globalMode == 'basic')
    return randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
  else if (globalMode == 'christmas') {
    return randomChristmasQuestions[Math.floor(Math.random() * randomChristmasQuestions.length)];
  }
}

function switchToRegularMode() {
  var randomQuestion = getRandomQuestion();
  // Display the question and show the "Start Timer" button
  document.getElementById('question-display').textContent = randomQuestion;
  document.getElementById('icebreaker-form').style.display = 'none';
}

function handleIcebreakerModes(urlParams) {
  const advancedMode = urlParams.get('advanced_mode');
  if (advancedMode) {
    return 'advanced';
  }
  const mode = urlParams.get('mode');
  if (mode == 'halloween') {
    return 'halloween';
  } else if (mode == 'christmas') {
    return 'christmas';
  }
  return 'basic';
}
