// Quadratic Quest: The Elephant's Trail
// Designed by ECT 301D Group 4 members, University of Embu
// Topic: Grade 10 Mathematics, Quadratic Expressions and Equations

var TIME_LIMIT = 30;   // seconds for each question
var PASS_MARK = 3;     // correct answers needed (out of 5) to pass a level
var BOARD_KEY = "group4_quadratic_quest_board";

// In every question the FIRST answer is the correct one.
// The game shuffles them before showing, so the order is never the same.
var levels = [
  {
    name: "Level 1: Gate of Knowledge",
    topic: "Factorising quadratic expressions",
    tip: "Look for two numbers that multiply to the last term and add to the middle term.",
    story: "The elephant has reached the university gate, but it is locked. " +
           "Factorise each expression to open it.",
    questions: [
      {
        q: "Factorise: x² + 5x + 6",
        answers: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x − 2)(x − 3)", "(x + 5)(x + 1)"],
        solution: "Find two numbers that multiply to 6 and add to 5. They are 2 and 3, so x² + 5x + 6 = (x + 2)(x + 3)."
      },
      {
        q: "Factorise: x² − 9",
        answers: ["(x − 3)(x + 3)", "(x − 3)²", "(x + 9)(x − 1)", "(x − 9)(x + 1)"],
        solution: "This is a difference of two squares: a² − b² = (a − b)(a + b). Here a = x and b = 3."
      },
      {
        q: "Factorise: x² − 7x + 12",
        answers: ["(x − 3)(x − 4)", "(x + 3)(x + 4)", "(x − 2)(x − 6)", "(x − 1)(x − 12)"],
        solution: "The numbers must multiply to +12 and add to −7. They are −3 and −4, so the answer is (x − 3)(x − 4)."
      },
      {
        q: "Factorise: 2x² + 7x + 3",
        answers: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(2x − 1)(x − 3)", "(x + 7)(2x + 3)"],
        solution: "Multiply 2 × 3 = 6. Two numbers that multiply to 6 and add to 7 are 1 and 6. " +
                  "Split the middle term: 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)."
      },
      {
        q: "Factorise: x² + 6x + 9",
        answers: ["(x + 3)²", "(x + 3)(x − 3)", "(x + 6)(x + 3)", "(x + 9)(x + 1)"],
        solution: "The first term is x², the last term is 3², and the middle term is 2 × 3 × x. " +
                  "This is a perfect square, so x² + 6x + 9 = (x + 3)²."
      }
    ]
  },
  {
    name: "Level 2: Library Bridge",
    topic: "Solving quadratic equations",
    tip: "Move everything to one side so the equation equals zero before you solve it.",
    story: "The bridge to the library has missing planks. Solve each equation to put them back. " +
           "Use factorisation, completing the square or the formula.",
    questions: [
      {
        q: "Solve: x² − 5x + 6 = 0",
        answers: ["x = 2 or x = 3", "x = −2 or x = −3", "x = 1 or x = 6", "x = −1 or x = 6"],
        solution: "Factorise: (x − 2)(x − 3) = 0. So x − 2 = 0 or x − 3 = 0, giving x = 2 or x = 3."
      },
      {
        q: "Solve: x² + 2x − 15 = 0",
        answers: ["x = 3 or x = −5", "x = −3 or x = 5", "x = 3 or x = 5", "x = −3 or x = −5"],
        solution: "Two numbers that multiply to −15 and add to 2 are 5 and −3. " +
                  "So (x + 5)(x − 3) = 0, giving x = −5 or x = 3."
      },
      {
        q: "Solve by completing the square: x² + 6x + 5 = 0",
        answers: ["x = −1 or x = −5", "x = 1 or x = 5", "x = −3 or x = 2", "x = 1 or x = −5"],
        solution: "Move the 5: x² + 6x = −5. Add (6 ÷ 2)² = 9 to both sides: (x + 3)² = 4. " +
                  "Then x + 3 = 2 or x + 3 = −2, so x = −1 or x = −5."
      },
      {
        q: "Use the quadratic formula: x² − 4x − 1 = 0",
        answers: ["x = 2 + √5 or x = 2 − √5", "x = 4 + √5 or x = 4 − √5", "x = −2 + √5 or x = −2 − √5", "x = 2 + √3 or x = 2 − √3"],
        solution: "Here a = 1, b = −4, c = −1. x = (4 ± √(16 + 4)) ÷ 2 = (4 ± √20) ÷ 2 = (4 ± 2√5) ÷ 2 = 2 ± √5."
      },
      {
        q: "Solve: 2x² − 3x − 2 = 0",
        answers: ["x = 2 or x = −1/2", "x = −2 or x = 1/2", "x = 2 or x = 1/2", "x = −2 or x = −1/2"],
        solution: "Multiply 2 × (−2) = −4. Two numbers that multiply to −4 and add to −3 are −4 and 1. " +
                  "2x² − 4x + x − 2 = 2x(x − 2) + 1(x − 2) = (2x + 1)(x − 2) = 0, so x = −1/2 or x = 2."
      }
    ]
  },
  {
    name: "Level 3: Shamba Field",
    topic: "Forming and solving quadratic equations from real life",
    tip: "Let a letter stand for the unknown, for example w for the width, then write the equation.",
    story: "The elephant must cross a farmer's shamba. The farmer will only let it pass " +
           "if you solve the shamba problems correctly.",
    questions: [
      {
        q: "A rectangular shamba is 3 m longer than it is wide. Its area is 40 m². What is its width?",
        answers: ["5 m", "8 m", "4 m", "10 m"],
        solution: "Let the width be w. Then w(w + 3) = 40, so w² + 3w − 40 = 0. " +
                  "(w + 8)(w − 5) = 0, so w = 5 (a width cannot be negative). The length is 8 m."
      },
      {
        q: "The product of two consecutive positive integers is 56. What are the integers?",
        answers: ["7 and 8", "6 and 7", "8 and 9", "5 and 6"],
        solution: "Let the integers be n and n + 1. Then n(n + 1) = 56, so n² + n − 56 = 0. " +
                  "(n + 8)(n − 7) = 0, so n = 7. The integers are 7 and 8."
      },
      {
        q: "A ball is thrown upward. Its height is h = 20t − 5t² metres after t seconds. After how many seconds does it land back on the ground?",
        answers: ["4 seconds", "2 seconds", "5 seconds", "20 seconds"],
        solution: "On the ground h = 0, so 20t − 5t² = 0. Factorise: 5t(4 − t) = 0. " +
                  "So t = 0 (the start) or t = 4. It lands after 4 seconds."
      },
      {
        q: "A positive number squared is 12 more than 4 times the number. Find the number.",
        answers: ["6", "2", "4", "12"],
        solution: "x² = 4x + 12, so x² − 4x − 12 = 0. (x − 6)(x + 2) = 0, so x = 6 or x = −2. " +
                  "The number is positive, so x = 6."
      },
      {
        q: "A plot has a perimeter of 30 m and an area of 54 m². What is the length of its longer side?",
        answers: ["9 m", "6 m", "10 m", "7 m"],
        solution: "Length + width = 15, so width = 15 − l. Then l(15 − l) = 54, so l² − 15l + 54 = 0. " +
                  "(l − 6)(l − 9) = 0. The sides are 6 m and 9 m, so the longer side is 9 m."
      }
    ]
  },
  {
    name: "Final Boss: Graduation Hill",
    topic: "Mixed challenge on all quadratic skills",
    tip: "Take your time. Check each answer by putting it back into the equation.",
    story: "This is the last climb. The questions are mixed, so use everything you have learnt.",
    questions: [
      {
        q: "Factorise: x² − 16",
        answers: ["(x − 4)(x + 4)", "(x − 4)²", "(x − 8)(x + 2)", "(x + 16)(x − 1)"],
        solution: "Difference of two squares: x² − 4² = (x − 4)(x + 4)."
      },
      {
        q: "Solve: x² − 8x + 15 = 0",
        answers: ["x = 3 or x = 5", "x = −3 or x = −5", "x = 1 or x = 15", "x = −3 or x = 5"],
        solution: "Two numbers that multiply to 15 and add to −8 are −3 and −5. " +
                  "(x − 3)(x − 5) = 0, so x = 3 or x = 5."
      },
      {
        q: "Factorise: 6x² + 5x + 1",
        answers: ["(2x + 1)(3x + 1)", "(6x + 1)(x + 1)", "(2x + 1)(3x − 1)", "(3x + 2)(2x + 1)"],
        solution: "Multiply 6 × 1 = 6. Two numbers that multiply to 6 and add to 5 are 2 and 3. " +
                  "6x² + 2x + 3x + 1 = 2x(3x + 1) + 1(3x + 1) = (2x + 1)(3x + 1)."
      },
      {
        q: "Solve: x² − 2x − 8 = 0",
        answers: ["x = 4 or x = −2", "x = −4 or x = 2", "x = 4 or x = 2", "x = −4 or x = −2"],
        solution: "Two numbers that multiply to −8 and add to −2 are −4 and 2. " +
                  "(x − 4)(x + 2) = 0, so x = 4 or x = −2."
      },
      {
        q: "Solve: 3x² − 7x + 2 = 0",
        answers: ["x = 2 or x = 1/3", "x = −2 or x = −1/3", "x = 2 or x = 3", "x = 1/2 or x = 3"],
        solution: "Multiply 3 × 2 = 6. Two numbers that multiply to 6 and add to −7 are −6 and −1. " +
                  "3x² − 6x − x + 2 = 3x(x − 2) − 1(x − 2) = (3x − 1)(x − 2) = 0, so x = 1/3 or x = 2."
      }
    ]
  }
];

// one easy question for the practice round, it does not count for anything
var practiceQuestion = {
  q: "Practice: factorise x² + 3x + 2",
  answers: ["(x + 1)(x + 2)", "(x + 3)(x + 2)", "(x − 1)(x − 2)", "(x + 3)(x − 2)"],
  solution: "Find two numbers that multiply to 2 and add to 3. They are 1 and 2, so x² + 3x + 2 = (x + 1)(x + 2)."
};

// ---------- game state ----------
var playerName = "";
var levelNo = 0;
var qNo = 0;
var lives = 3;
var bankedScore = 0;     // points from levels already passed
var bankedCorrect = 0;   // correct answers from levels already passed
var levelScore = 0;      // points in the level being played
var levelCorrect = 0;
var timeLeft = TIME_LIMIT;
var timer = null;
var answered = false;
var hintUsed = false;
var currentQuestions = [];
var endAction = null;    // what the button on the level-end screen does
var boardBackTo = "start";
var practice = false;    // true while the practice round is running
var relaxed = false;     // true when the player ticked Relaxed mode

// ---------- small helpers ----------
function $(id) {
  return document.getElementById(id);
}

function show(id) {
  var all = document.querySelectorAll(".screen");
  for (var i = 0; i < all.length; i++) {
    all[i].classList.remove("active");
  }
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function moveElephant(stop) {
  var percent = (stop / levels.length) * 100;
  $("elephant").style.left = percent + "%";
  $("fill").style.width = percent + "%";
}

function updateStatus() {
  if (practice) {
    $("lvlLabel").textContent = "Practice round";
    $("lives").textContent = "unlimited";
    $("score").textContent = "not counted";
    return;
  }
  $("lvlLabel").textContent = levels[levelNo].name;
  var hearts = "";
  for (var i = 0; i < 3; i++) {
    hearts += (i < lives) ? "♥ " : "♡ ";
  }
  $("lives").textContent = hearts;
  $("score").textContent = bankedScore + levelScore;
}

// ---------- starting the game ----------
function startGame() {
  var typed = $("nameInput").value.trim();
  playerName = typed === "" ? "Player" : typed;
  relaxed = $("relaxed").checked;
  practice = false;
  levelNo = 0;
  bankedScore = 0;
  bankedCorrect = 0;
  $("trail").classList.remove("hidden");
  showIntro();
}

function showIntro() {
  var lvl = levels[levelNo];
  $("introTitle").textContent = lvl.name;
  $("introTopic").textContent = "Skill: " + lvl.topic;
  $("introStory").textContent = lvl.story;
  $("introTip").textContent = "Tip: " + lvl.tip;
  moveElephant(levelNo);
  show("intro");
}

function startLevel() {
  lives = 3;
  qNo = 0;
  levelScore = 0;
  levelCorrect = 0;
  currentQuestions = shuffle(levels[levelNo].questions.slice());
  show("game");
  showQuestion();
}

// ---------- questions ----------
function showQuestion() {
  var q = currentQuestions[qNo];
  answered = false;
  hintUsed = false;

  updateStatus();
  $("qCount").textContent = practice ? "Practice question (does not count)" :
    "Question " + (qNo + 1) + " of " + currentQuestions.length;
  $("question").textContent = q.q;
  $("feedback").innerHTML = "";
  $("nextBtn").classList.add("hidden");
  $("hintBtn").disabled = false;

  var box = $("options");
  box.innerHTML = "";
  var options = shuffle(q.answers.slice());

  for (var i = 0; i < options.length; i++) {
    var b = document.createElement("button");
    b.className = "option";
    b.textContent = options[i];
    b.setAttribute("data-value", options[i]);
    b.addEventListener("click", makeClickHandler(b, options[i]));
    box.appendChild(b);
  }

  startTimer();
}

function makeClickHandler(button, text) {
  return function () {
    chooseAnswer(button, text);
  };
}

function startTimer() {
  stopTimer();
  if (practice || relaxed) {
    // no countdown in practice or relaxed mode
    $("time").textContent = "no timer";
    $("timebar").style.width = "100%";
    $("timebar").classList.remove("low");
    return;
  }
  timeLeft = TIME_LIMIT;
  drawTime();
  timer = setInterval(function () {
    timeLeft--;
    drawTime();
    if (timeLeft <= 0) {
      stopTimer();
      timeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function drawTime() {
  $("time").textContent = timeLeft + "s";
  var bar = $("timebar");
  bar.style.width = (timeLeft / TIME_LIMIT * 100) + "%";
  if (timeLeft <= 8) {
    bar.classList.add("low");
  } else {
    bar.classList.remove("low");
  }
}

// mark the buttons after an answer (or when time runs out)
function lockOptions(correctText, chosenText) {
  var buttons = document.querySelectorAll(".option");
  for (var i = 0; i < buttons.length; i++) {
    var b = buttons[i];
    var value = b.getAttribute("data-value");
    b.disabled = true;
    if (value === correctText) {
      b.classList.add("right");
      b.textContent = "✓ " + value;
    } else if (value === chosenText) {
      b.classList.add("wrong");
      b.textContent = "✗ " + value;
    }
  }
  $("hintBtn").disabled = true;
}

function chooseAnswer(button, text) {
  if (answered) return;
  answered = true;
  stopTimer();

  var q = currentQuestions[qNo];
  var correct = q.answers[0];
  lockOptions(correct, text);

  if (practice) {
    if (text === correct) {
      $("feedback").innerHTML =
        "<div class='good'><p><strong>Correct!</strong> That is how every question works. " +
        "This practice round does not count.</p></div>";
    } else {
      $("feedback").innerHTML =
        "<div class='bad'><p><strong>Not quite.</strong> The correct answer is: " + correct + "</p>" +
        "<p>" + q.solution + "</p>" +
        "<p>In the real game a wrong answer costs one life, so read the steps carefully.</p></div>";
    }
    afterAnswer();
    return;
  }

  if (text === correct) {
    var bonus = relaxed ? 0 : Math.min(10, Math.floor(timeLeft / 3));
    var points = 10 + bonus - (hintUsed ? 5 : 0);
    if (points < 0) points = 0;
    levelScore += points;
    levelCorrect++;
    $("feedback").innerHTML =
      "<div class='good'><p><strong>Correct!</strong> +" + points + " points" +
      (bonus > 0 ? " (includes " + bonus + " time bonus)" : "") + "</p></div>";
  } else {
    lives--;
    $("feedback").innerHTML =
      "<div class='bad'><p><strong>Not quite.</strong> The correct answer is: " + correct + "</p>" +
      "<p>" + q.solution + "</p></div>";
  }

  afterAnswer();
}

function timeUp() {
  if (answered) return;
  answered = true;

  var q = currentQuestions[qNo];
  lockOptions(q.answers[0], "");
  lives--;
  $("feedback").innerHTML =
    "<div class='bad'><p><strong>Time is up!</strong> The correct answer is: " + q.answers[0] + "</p>" +
    "<p>" + q.solution + "</p></div>";

  afterAnswer();
}

function afterAnswer() {
  updateStatus();
  var lastQuestion = (qNo >= currentQuestions.length - 1);
  var next = $("nextBtn");
  if (practice) {
    next.textContent = "Finish Practice";
  } else {
    next.textContent = (lastQuestion || lives <= 0) ? "Finish Level" : "Next Question";
  }
  next.classList.remove("hidden");
}

function useHint() {
  if (answered || hintUsed) return;
  hintUsed = true;
  $("hintBtn").disabled = true;

  var correct = currentQuestions[qNo].answers[0];
  var wrongOnes = [];
  var buttons = document.querySelectorAll(".option");
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute("data-value") !== correct) {
      wrongOnes.push(buttons[i]);
    }
  }
  shuffle(wrongOnes);
  for (var k = 0; k < 2; k++) {
    wrongOnes[k].disabled = true;
    wrongOnes[k].classList.add("removed");
  }
}

function nextQuestion() {
  if (practice) {
    practice = false;
    show("start");
    return;
  }
  var lastQuestion = (qNo >= currentQuestions.length - 1);
  if (lastQuestion || lives <= 0) {
    endLevel();
  } else {
    qNo++;
    showQuestion();
  }
}

// ---------- end of a level ----------
function endLevel() {
  stopTimer();
  var passed = levelCorrect >= PASS_MARK;
  var stats = "Correct answers: " + levelCorrect + " out of " + currentQuestions.length +
              " | Points: " + levelScore;
  $("endStats").textContent = stats;

  if (passed) {
    bankedScore += levelScore;
    bankedCorrect += levelCorrect;
    levelNo++;

    if (levelNo >= levels.length) {
      moveElephant(levels.length);
      $("endTitle").textContent = "Final level cleared!";
      $("endText").textContent = "The elephant is at the top of Graduation Hill.";
      $("endBtn").textContent = "See My Results";
      endAction = finishGame;
    } else {
      moveElephant(levelNo);
      $("endTitle").textContent = "Level cleared!";
      $("endText").textContent = "The way is open. The elephant moves on to the next checkpoint.";
      $("endBtn").textContent = "Go to Next Level";
      endAction = showIntro;
    }
  } else {
    $("endTitle").textContent = lives <= 0 ? "Out of lives" : "Not enough correct answers";
    $("endText").textContent = "You need at least " + PASS_MARK +
      " correct answers to pass. Read the solutions again and give it another try.";
    $("endBtn").textContent = "Try This Level Again";
    endAction = startLevel;
  }

  show("levelEnd");
}

// ---------- final result ----------
function finishGame() {
  var total = levels.length * 5;
  var percent = Math.round((bankedCorrect / total) * 100);
  var badge = $("badge");
  var msg = $("finalMsg");

  badge.className = "badge";
  if (percent >= 90) {
    badge.classList.add("gold");
    badge.textContent = "Gold Elephant";
    msg.textContent = "Excellent work. You have mastered quadratic equations.";
  } else if (percent >= 70) {
    badge.classList.add("silver");
    badge.textContent = "Silver Elephant";
    msg.textContent = "Well done. You passed the quest. Try again for the Gold badge.";
  } else if (percent >= 50) {
    badge.classList.add("bronze");
    badge.textContent = "Bronze Elephant";
    msg.textContent = "Good effort. Practise a little more to reach the 70% pass mark.";
  } else {
    badge.classList.add("none");
    badge.textContent = "Keep Practising";
    msg.textContent = "Revise factorisation and try the quest again.";
  }

  $("finalStats").textContent = playerName + ": " + bankedScore + " points | " +
    bankedCorrect + " out of " + total + " correct (" + percent + "%)";

  saveScore();
  show("final");
}

// ---------- leaderboard (saved in the browser) ----------
function loadBoard() {
  try {
    var data = localStorage.getItem(BOARD_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    // storage may be blocked, then we just show an empty board
  }
  return [];
}

function saveScore() {
  var list = loadBoard();
  list.push({ name: playerName, score: bankedScore, correct: bankedCorrect, relaxed: relaxed });
  list.sort(function (a, b) {
    return b.score - a.score;
  });
  list = list.slice(0, 5);
  try {
    localStorage.setItem(BOARD_KEY, JSON.stringify(list));
  } catch (e) {
    // ignore
  }
}

function showBoard(from) {
  boardBackTo = from;
  var list = loadBoard();
  var ol = $("boardList");
  ol.innerHTML = "";

  if (list.length === 0) {
    ol.innerHTML = "<li>No scores yet. Be the first to finish the quest!</li>";
  } else {
    for (var i = 0; i < list.length; i++) {
      var li = document.createElement("li");
      li.textContent = list[i].name + (list[i].relaxed ? " (relaxed)" : "") + " - " + list[i].score + " points (" +
        list[i].correct + "/20 correct)";
      ol.appendChild(li);
    }
  }
  show("board");
}

function playAgain() {
  $("trail").classList.add("hidden");
  moveElephant(0);
  show("start");
}

// on wide screens the help sections start open, on phones they stay folded
var folds = document.querySelectorAll("details.fold");
if (window.innerWidth > 600) {
  for (var f = 0; f < folds.length; f++) {
    folds[f].open = true;
  }
}

// ---------- practice round and quitting ----------
function startPractice() {
  practice = true;
  relaxed = $("relaxed").checked;
  lives = 3;
  qNo = 0;
  levelScore = 0;
  currentQuestions = [practiceQuestion];
  $("trail").classList.add("hidden");
  show("game");
  showQuestion();
}

function quitGame() {
  if (!practice) {
    var ok = confirm("Quit and go back to the start screen? Your progress will be lost.");
    if (!ok) return;
  }
  stopTimer();
  practice = false;
  playAgain();
}

// ---------- button wiring ----------
$("startBtn").addEventListener("click", startGame);
$("practiceBtn").addEventListener("click", startPractice);
$("quitBtn").addEventListener("click", quitGame);
$("beginLevelBtn").addEventListener("click", startLevel);
$("hintBtn").addEventListener("click", useHint);
$("nextBtn").addEventListener("click", nextQuestion);
$("endBtn").addEventListener("click", function () {
  if (endAction) endAction();
});
$("againBtn").addEventListener("click", playAgain);
$("boardBtn1").addEventListener("click", function () { showBoard("start"); });
$("boardBtn2").addEventListener("click", function () { showBoard("final"); });
$("boardBack").addEventListener("click", function () { show(boardBackTo); });
$("nameInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") startGame();
});