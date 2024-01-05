const virtualMeetingQuestions = [
  "What's your favorite book or book genre?",
  "Share one interesting fact about your hometown.",
  "Do you have any unique talents or hobbies?",
  "Where would you go if you could travel anywhere in the world right now?",
  "What's your go-to comfort food?",
  "Describe a movie or TV show you've recently enjoyed.",
  "If you had a superpower, what would it be, and why?",
  "Share a memorable childhood vacation experience.",
  "What's your preferred way to relax after a long day?",
  "What's the best piece of advice you've ever received?",
  "If you could have dinner with any historical figure, who would it be, and what would you ask them?",
  "Share a funny or embarrassing travel story.",
  "Describe a skill or hobby you'd love to learn in the future.",
  "What goal are you currently working toward, personally or professionally?",
  "If you could switch lives with a fictional character for a day, who would it be, and what would you do?",
  "Share a memorable adventure or outdoor activity you've experienced.",
  "Discuss a recent act of kindness you witnessed or participated in.",
  "If you were to write a book, what genre would it be, and what would the title be?",
  "What's the most interesting place you've visited and why?",
  "Describe a cultural tradition or festival you enjoy celebrating.",
  "Where and when would you go if you could time-travel to any historical period, past or future?",
  "What's the weirdest food combination you've ever tried and liked?",
  "Share an unusual or unique item on your bucket list.",
  "If you could have a dinner party with three fictional characters, who would you invite, and why?",
  "What's the most adventurous thing you've ever done or an adventure you'd like to embark on?",
];

const halloweenQuestions = [
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
  "If you could have the best Halloween party ever, what theme would you want for your party?",
];

const christmasQuestions = [
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
  "What would be the most unexpected thing to find under your Christmas tree?",
];

const promptMap = {
  "meet-the-team":
    "Icebreaker for welcoming and connecting new team members easily.",
  "project-start":
    "Fun, engaging question to start our new project with energy.",
  "fun-day-out": "Light-hearted, bonding activity for our team retreat.",
  "learn-together": "Interactive icebreaker to kick off our training session.",
  "monday-icebreaker":
    "Quick, amusing question to open our weekly team meeting.",
};

//Global variables
const icebreakerQuestion = document.getElementById("icebreaker-question");
const nextButton = document.getElementById("next-button");
const normalModeButton = document.getElementById("normal-mode");
const aiModeButton = document.getElementById("ai-mode");
const aiModeWrapper = document.getElementById("ai-mode-wrapper");
const submitButton = document.getElementById("submit-button");
const timer = document.getElementById("timer");
const background = document.getElementById("icebreaker-background");

let questions = virtualMeetingQuestions;
let currentQuestionIndex = -1;
let isAIMode = false;
let countdown;

//document event listener
document.addEventListener("DOMContentLoaded", function() {
  const mode = getURLParameter("mode");
  switch (mode) {
    case "halloween":
      questions = halloweenQuestions;
      document.getElementById("icebreaker-background").style.backgroundColor =
        "#FF8C00";
      break;
    case "christmas":
      questions = christmasQuestions;
      document.getElementById("icebreaker-background").style.backgroundColor =
        "#008000";
      break;
    default:
      questions = virtualMeetingQuestions;
  }

  currentQuestionIndex = getRandomQuestionIndex(-1, questions.length);
  icebreakerQuestion.textContent = questions[currentQuestionIndex];

  nextButton.addEventListener("click", () => {
    currentQuestionIndex = getRandomQuestionIndex(
      currentQuestionIndex,
      questions.length
    );
    icebreakerQuestion.textContent = questions[currentQuestionIndex];
  });

  normalModeButton.addEventListener("click", () => toggleMode(false));
  aiModeButton.addEventListener("click", () => toggleMode(true));

  // Add event listeners to all purpose-item buttons
  document.querySelectorAll(".purpose-item").forEach((button) => {
    button.addEventListener("click", function() {
      // Retrieve the longer prompt based on button ID
      const longerPrompt = promptMap[this.id];

      // Set the longer prompt as the value of the purpose input
      document.getElementById("purpose").value = longerPrompt;

      // Hide the clicked button
      this.style.display = "none";
    });
  });
});

//random question logic
function getRandomQuestionIndex(currentIndex, totalQuestions) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * totalQuestions);
  } while (randomIndex === currentIndex);
  return randomIndex;
}

// Modify toggleMode function
function toggleMode(isAIMode) {
  normalModeButton.classList.toggle("is-active", !isAIMode);
  aiModeButton.classList.toggle("is-active", isAIMode);
  aiModeWrapper.style.display = isAIMode ? "grid" : "none";
  icebreakerQuestion.style.display = isAIMode ? "none" : "block";
  nextButton.disabled = isAIMode;

  if (!isAIMode) {
    resetToDefaultMode();
  }
}

// Function to show loading text animation
function showLoadingText(element, text) {
  let dots = 0;
  element.textContent = text;
  return setInterval(() => {
    element.textContent = text + ".".repeat(dots);
    dots = (dots + 1) % 4;
  }, 500);
}

// Submit AI Response with Validation
submitButton.addEventListener("click", () => {
  if (validateInput()) {
    submitAIResponse();
  } else {
    alert("Please enter a valid purpose and at least two participants.");
  }
});

// Validation Function
function validateInput() {
  var purpose = document.getElementById("purpose").value.trim();
  var participants = document
    .getElementById("participants")
    .value.split(",")
    .map(p => p.trim())
    .filter(p => p !== ""); // Remove empty strings

  return purpose !== "" && participants.length >= 2;
}

// Submit AI Response
async function submitAIResponse() {
  try {
    aiModeWrapper.style.display = "none";
    icebreakerQuestion.style.display = "block";
    nextButton.disabled = true;

    const loadingInterval = showLoadingText(
      icebreakerQuestion,
      "Please wait for a moment while the magic happens"
    );

    await submitIcebreakerForm();

    clearInterval(loadingInterval);
    timer.style.display = "block";
    icebreakerQuestion.textContent = "AI response is ready!";

    // Delay for 500ms before displaying the question
    setTimeout(() => {
      icebreakerQuestion.textContent =
        window.questions[0] || "No questions available"; // Replace with actual question
      nextButton.disabled = false;
    }, 500);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//submit icebreaker form
async function submitIcebreakerForm() {
  var purpose = document.getElementById("purpose").value;
  var time = document.getElementById("time").value;
  var participants = document
    .getElementById("participants")
    .value.split(",")
    .map((p) => p.trim());

  // Send a request to the back-end with the user's input
  const response = await fetch(
    "https://icebreakre-generator.onrender.com/generate-questions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purpose: purpose,
        time: time,
        participants: participants,
      }),
    }
  );
  let data = await response.json();
  questions = Object.values(data.generatedQuestions);

  totalQuestionsInAdvancedMode = questions.length;

  window.participants = participants.slice(1);
  window.questions = questions.slice(1);

  window.countdown = startTimer(time);

  icebreakerQuestion.textContent = questions[0];
  nextButton.disabled = false;
}

function startTimer(minutes) {
  const endTime = Date.now() + minutes * 60 * 1000;
  const display = document.getElementById("timer");

  function updateTimer() {
    const currentTime = Date.now();
    const timeLeft = endTime - currentTime;

    if (timeLeft >= 0) {
      const minutes = Math.floor(timeLeft / 1000 / 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      display.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    } else {
      clearInterval(countdown);
      display.textContent = "Time's up!";
    }
  }

  function formatTime(num) {
    return num < 10 ? "0" + num : num.toString();
  }

  updateTimer();
  const countdown = setInterval(updateTimer, 1000);
  return countdown;
}

// New function to reset to default mode
function resetToDefaultMode() {
  clearTimer();

  questions = virtualMeetingQuestions;
  currentQuestionIndex = getRandomQuestionIndex(-1, questions.length);
  icebreakerQuestion.textContent = questions[currentQuestionIndex];

  background.style.backgroundColor = "";
  timer.style.display = "none";
}

// Function to clear the timer
function clearTimer() {
  if (countdown) {
    clearInterval(countdown);
    timer.textContent = "";
    countdown = null;
  }
}

// get URL parameter
function getURLParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}
