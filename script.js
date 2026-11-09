// Quadratic Quest: The Elephant's Trail
// Designed by ECT 301D Group 4 members, University of Embu
// Topic: Grade 10 Mathematics, Quadratic Expressions and Equations

var TIME_LIMIT = 30;   // seconds for each question
var PASS_MARK = 3;     // correct answers needed (out of 5) to pass a level
var BOARD_KEY = "group4_quadratic_quest_board";
var SOUND_KEY = "group4_quadratic_quest_sound";
var PROGRESS_KEY = "group4_quadratic_quest_progress";
var TEXT_KEY = "group4_quadratic_quest_text";
var CONTRAST_KEY = "group4_quadratic_quest_contrast";
var LETTERS = ["A", "B", "C", "D"];

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
var levelOrder = [0, 1, 2, 3, 4];   // order the questions of this level are asked in

// ---------- sound effects (made in the browser, no sound files needed) ----------
var soundOn = true;
var audioCtx = null;

try {
  if (localStorage.getItem(SOUND_KEY) === "off") soundOn = false;
} catch (e) {
  // storage blocked, sound stays on
}

function getAudio() {
  if (!audioCtx) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      audioCtx = new AC();
    } catch (e) {
      return null;
    }
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// one short note: pitch, when it starts, how long, wave shape, loudness
function tone(freq, start, length, type, volume) {
  var ctx = getAudio();
  if (!ctx) return;
  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  var t0 = ctx.currentTime + start;
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(volume || 0.15, t0 + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + length);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + length + 0.05);
}

function playSound(name) {
  if (!soundOn) return;
  if (name === "correct") {
    tone(523, 0, 0.12);
    tone(659, 0.11, 0.12);
    tone(784, 0.22, 0.28);
  } else if (name === "wrong") {
    tone(220, 0, 0.18, "sawtooth", 0.09);
    tone(165, 0.16, 0.32, "sawtooth", 0.09);
  } else if (name === "tick") {
    tone(880, 0, 0.05, "square", 0.04);
  } else if (name === "levelup") {
    tone(523, 0, 0.14);
    tone(659, 0.13, 0.14);
    tone(784, 0.26, 0.14);
    tone(1047, 0.39, 0.4);
  } else if (name === "fail") {
    tone(392, 0, 0.2, "triangle");
    tone(330, 0.19, 0.2, "triangle");
    tone(262, 0.38, 0.4, "triangle");
  } else if (name === "fanfare") {
    var notes = [523, 523, 523, 659, 784, 659, 784, 1047];
    var starts = [0, 0.14, 0.28, 0.42, 0.6, 0.85, 1.0, 1.25];
    var lengths = [0.12, 0.12, 0.12, 0.16, 0.22, 0.14, 0.2, 0.7];
    for (var i = 0; i < notes.length; i++) {
      tone(notes[i], starts[i], lengths[i], "triangle", 0.16);
    }
  }
}

function drawSoundButton() {
  var b = $("soundBtn");
  b.textContent = soundOn ? "🔊" : "🔇";
  b.setAttribute("aria-pressed", soundOn ? "true" : "false");
  b.setAttribute("aria-label", soundOn ?
    "Sound effects are on. Tap to turn them off." :
    "Sound effects are off. Tap to turn them on.");
}

function toggleSound() {
  soundOn = !soundOn;
  try {
    localStorage.setItem(SOUND_KEY, soundOn ? "on" : "off");
  } catch (e) {
    // ignore
  }
  drawSoundButton();
  if (soundOn) playSound("correct");
}

// ---------- text size and high contrast (remembered on this device) ----------
var TEXT_SIZES = ["normal", "large", "xlarge"];
var TEXT_LABELS = ["A", "A+", "A++"];
var TEXT_WORDS = ["normal", "large", "extra large"];
var textLevel = 0;
var highContrast = false;

try {
  var savedText = TEXT_SIZES.indexOf(localStorage.getItem(TEXT_KEY));
  if (savedText > -1) textLevel = savedText;
  highContrast = (localStorage.getItem(CONTRAST_KEY) === "high");
} catch (e) {
  // storage blocked, the defaults are used
}

function applyLook() {
  var root = document.documentElement;
  if (textLevel === 0) {
    root.removeAttribute("data-text");
  } else {
    root.setAttribute("data-text", TEXT_SIZES[textLevel]);
  }
  if (highContrast) {
    root.setAttribute("data-contrast", "high");
  } else {
    root.removeAttribute("data-contrast");
  }

  var tb = $("textBtn");
  tb.textContent = TEXT_LABELS[textLevel];
  var next = TEXT_WORDS[(textLevel + 1) % 3];
  tb.setAttribute("aria-label", "Text size is " + TEXT_WORDS[textLevel] +
    ". Tap to change it to " + next + ".");

  var cb = $("contrastBtn");
  cb.setAttribute("aria-pressed", highContrast ? "true" : "false");
  cb.setAttribute("aria-label", highContrast ?
    "High contrast is on. Tap to turn it off." :
    "High contrast is off. Tap to turn it on.");
}

function saveLook() {
  try {
    localStorage.setItem(TEXT_KEY, TEXT_SIZES[textLevel]);
    localStorage.setItem(CONTRAST_KEY, highContrast ? "high" : "normal");
  } catch (e) {
    // ignore
  }
}

function changeTextSize() {
  textLevel = (textLevel + 1) % 3;
  applyLook();
  saveLook();
}

function toggleContrast() {
  highContrast = !highContrast;
  applyLook();
  saveLook();
}

// ---------- reading aloud (the browser's own voice, nothing to install) ----------
var canSpeak = ("speechSynthesis" in window) && ("SpeechSynthesisUtterance" in window);

// turns maths symbols into words so the voice reads them properly
function toSpeech(text) {
  var s = text;
  s = s.replace(/(\d)\s*m²/g, "$1 square metres");
  s = s.replace(/(\d)\s*m\b/g, "$1 metres");
  // brackets that hold ordinary words become pauses, the rest are read out
  s = s.replace(/\(([^()]*\b[A-Za-z]{3,}\b[^()]*)\)/g, ", $1, ");
  s = s.replace(/\(/g, " open bracket ");
  s = s.replace(/\)/g, " close bracket ");
  s = s.replace(/²/g, " squared ");
  s = s.replace(/√/g, " square root of ");
  s = s.replace(/±/g, " plus or minus ");
  s = s.replace(/÷/g, " divided by ");
  s = s.replace(/×/g, " times ");
  s = s.replace(/=/g, " equals ");
  s = s.replace(/\+/g, " plus ");
  s = s.replace(/−/g, " minus ");
  s = s.replace(/(\d)\/(\d)/g, "$1 over $2");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

function speak(text) {
  if (!canSpeak) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(toSpeech(text));
  u.lang = "en-GB";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function stopSpeaking() {
  if (canSpeak) window.speechSynthesis.cancel();
}

function readQuestion() {
  var parts = [$("question").textContent];
  var buttons = document.querySelectorAll(".option");
  for (var i = 0; i < buttons.length; i++) {
    parts.push("Option " + LETTERS[i] + ". " + buttons[i].getAttribute("data-value"));
  }
  speak(parts.join(". "));
}

// adds the Listen button under the feedback box
function addListenButton(text) {
  if (!canSpeak) return;
  var box = $("feedback").firstChild;
  if (!box) return;
  var b = document.createElement("button");
  b.className = "btn alt small listen";
  b.textContent = "🔊 Listen to the steps";
  b.addEventListener("click", function () {
    speak(text);
  });
  box.appendChild(b);
}

// ---------- small helpers ----------
function $(id) {
  return document.getElementById(id);
}

function show(id) {
  stopSpeaking();
  var all = document.querySelectorAll(".screen");
  for (var i = 0; i < all.length; i++) {
    all[i].classList.remove("active");
  }
  $(id).classList.add("active");
  window.scrollTo(0, 0);
  if (id === "start") refreshContinue();
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
  var old = loadProgress();
  if (old) {
    if (!confirm("There is a saved game for " + old.name + ". Start a new game and delete it?")) return;
    clearProgress();
  }
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
  saveProgress("intro");
  show("intro");
}

function startLevel() {
  lives = 3;
  qNo = 0;
  levelScore = 0;
  levelCorrect = 0;
  levelOrder = shuffle([0, 1, 2, 3, 4]);
  currentQuestions = orderedQuestions(levelNo, levelOrder);
  show("game");
  showQuestion();
}

// ---------- questions ----------
function showQuestion() {
  var q = currentQuestions[qNo];
  answered = false;
  hintUsed = false;
  stopSpeaking();

  saveProgress("play");
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
    b.setAttribute("data-value", options[i]);

    var letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = LETTERS[i];
    var label = document.createElement("span");
    label.className = "label";
    label.textContent = options[i];
    var mark = document.createElement("span");
    mark.className = "mark";

    b.appendChild(letter);
    b.appendChild(label);
    b.appendChild(mark);
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
  if (timeLeft <= 5 && timeLeft > 0) playSound("tick");
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
    var mark = b.querySelector(".mark");
    b.disabled = true;
    if (value === correctText) {
      b.classList.add("right");
      mark.textContent = "✓";
    } else if (value === chosenText) {
      b.classList.add("wrong");
      mark.textContent = "✗";
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
  var isRight = (text === correct);
  lockOptions(correct, text);
  playSound(isRight ? "correct" : "wrong");

  if (practice) {
    if (isRight) {
      $("feedback").innerHTML =
        "<div class='good'><p><strong>Correct!</strong> That is how every question works. " +
        "This practice round does not count.</p></div>";
    } else {
      $("feedback").innerHTML =
        "<div class='bad'><p><strong>Not quite.</strong> The correct answer is: " + correct + "</p>" +
        "<p>" + q.solution + "</p>" +
        "<p>In the real game a wrong answer costs one life, so read the steps carefully.</p></div>";
    }
    addListenButton("The correct answer is " + correct + ". " + q.solution);
    afterAnswer();
    return;
  }

  if (isRight) {
    var bonus = relaxed ? 0 : Math.min(10, Math.floor(timeLeft / 3));
    var points = 10 + bonus - (hintUsed ? 5 : 0);
    if (points < 0) points = 0;
    levelScore += points;
    levelCorrect++;
    $("feedback").innerHTML =
      "<div class='good'><p><strong>Correct!</strong> +" + points + " points" +
      (bonus > 0 ? " (includes " + bonus + " time bonus)" : "") + "</p></div>";
    addListenButton("Here are the steps. " + q.solution);
  } else {
    lives--;
    $("feedback").innerHTML =
      "<div class='bad'><p><strong>Not quite.</strong> The correct answer is: " + correct + "</p>" +
      "<p>" + q.solution + "</p></div>";
    addListenButton("The correct answer is " + correct + ". " + q.solution);
  }

  afterAnswer();
}

function timeUp() {
  if (answered) return;
  answered = true;

  var q = currentQuestions[qNo];
  lockOptions(q.answers[0], "");
  playSound("wrong");
  lives--;
  $("feedback").innerHTML =
    "<div class='bad'><p><strong>Time is up!</strong> The correct answer is: " + q.answers[0] + "</p>" +
    "<p>" + q.solution + "</p></div>";
  addListenButton("Time is up. The correct answer is " + q.answers[0] + ". " + q.solution);

  afterAnswer();
}

function afterAnswer() {
  saveProgress("answered");
  updateStatus();
  var lastQuestion = (qNo >= currentQuestions.length - 1);
  var next = $("nextBtn");
  if (practice) {
    next.textContent = "Finish Practice";
  } else {
    next.textContent = (lastQuestion || lives <= 0) ? "Finish Level" : "Next Question";
  }
  next.classList.remove("hidden");
  // keyboard users can press Enter for the next question, phones scroll it into view
  try {
    next.focus({ preventScroll: true });
  } catch (e) {
    // older browsers
  }
  next.scrollIntoView({ behavior: "smooth", block: "nearest" });
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

  playSound(passed ? "levelup" : "fail");

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

  finalPercent = percent;
  finalBadgeText = badge.textContent;
  finalBadgeClass = badge.className;
  $("certBtn").classList.toggle("hidden", percent < 50);

  clearProgress();
  saveScore();
  show("final");
  playSound("fanfare");
}

// ---------- certificate ----------
var finalPercent = 0;
var finalBadgeText = "";
var finalBadgeClass = "badge";

function fillCertificate() {
  var name = $("certName").value.trim();
  $("certNameOut").textContent = name === "" ? "Player" : name;
  $("certBadge").className = finalBadgeClass + " c-badge";
  $("certBadge").textContent = finalBadgeText;
  $("certStats").textContent = bankedScore + " points | " + bankedCorrect + " out of " +
    (levels.length * 5) + " correct (" + finalPercent + "%)" + (relaxed ? " | Relaxed mode" : "");
  $("certDate").textContent = new Date().toLocaleDateString("en-GB",
    { day: "numeric", month: "long", year: "numeric" });
}

function showCertificate() {
  $("certName").value = playerName === "Player" ? "" : playerName;
  fillCertificate();
  show("certificate");
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

function clearBoard() {
  if (!confirm("Delete all saved scores on this device?")) return;
  try {
    localStorage.removeItem(BOARD_KEY);
  } catch (e) {
    // ignore
  }
  showBoard(boardBackTo);
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

// ---------- saving progress so a player can continue later ----------
function orderedQuestions(lvl, order) {
  var list = [];
  for (var i = 0; i < order.length; i++) {
    list.push(levels[lvl].questions[order[i]]);
  }
  return list;
}

function saveProgress(stage) {
  if (practice) return;
  var data = {
    v: 1,
    name: playerName,
    relaxed: relaxed,
    levelNo: levelNo,
    stage: stage,
    qNo: qNo,
    lives: lives,
    levelScore: levelScore,
    levelCorrect: levelCorrect,
    order: levelOrder,
    bankedScore: bankedScore,
    bankedCorrect: bankedCorrect
  };
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  } catch (e) {
    // storage blocked, the game still works but cannot be continued later
  }
}

function clearProgress() {
  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch (e) {
    // ignore
  }
}

function isInt(n, min, max) {
  return typeof n === "number" && n % 1 === 0 && n >= min && n <= max;
}

// returns the saved game, or null if there is none or the data looks wrong
function loadProgress() {
  var p;
  try {
    var raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return null;
    p = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (!p || p.v !== 1 || typeof p.name !== "string") return null;
  if (p.stage !== "intro" && p.stage !== "play" && p.stage !== "answered") return null;
  if (!isInt(p.levelNo, 0, levels.length - 1) || !isInt(p.qNo, 0, 4) || !isInt(p.lives, 0, 3)) return null;
  if (!isInt(p.levelScore, 0, 1000) || !isInt(p.levelCorrect, 0, 5)) return null;
  if (!isInt(p.bankedScore, 0, 5000) || !isInt(p.bankedCorrect, 0, 20)) return null;
  if (!Array.isArray(p.order) || p.order.length !== 5) return null;
  var seen = [0, 0, 0, 0, 0];
  for (var i = 0; i < 5; i++) {
    if (!isInt(p.order[i], 0, 4) || seen[p.order[i]]) return null;
    seen[p.order[i]] = 1;
  }
  p.name = p.name.slice(0, 20);
  p.relaxed = (p.relaxed === true);
  return p;
}

// shows or hides the "Continue my game" box on the start screen
function refreshContinue() {
  var p = loadProgress();
  var box = $("resumeBox");
  if (!p) {
    box.classList.add("hidden");
    return;
  }
  var where;
  if (p.stage === "intro") {
    where = "at the start of " + levels[p.levelNo].name;
  } else if (p.stage === "play") {
    where = "in " + levels[p.levelNo].name + ", question " + (p.qNo + 1);
  } else if (p.qNo >= 4 || p.lives <= 0) {
    where = "finishing " + levels[p.levelNo].name;
  } else {
    where = "in " + levels[p.levelNo].name + ", question " + (p.qNo + 2);
  }
  var points = p.bankedScore + (p.stage === "intro" ? 0 : p.levelScore);
  $("resumeText").textContent = "Saved game for " + p.name + ": " + where +
    " (" + points + " points so far).";
  box.classList.remove("hidden");
}

function continueGame() {
  var p = loadProgress();
  if (!p) {
    refreshContinue();
    return;
  }
  playerName = p.name;
  relaxed = p.relaxed;
  practice = false;
  levelNo = p.levelNo;
  bankedScore = p.bankedScore;
  bankedCorrect = p.bankedCorrect;
  $("trail").classList.remove("hidden");

  if (p.stage === "intro") {
    showIntro();
    return;
  }

  levelOrder = p.order;
  currentQuestions = orderedQuestions(levelNo, levelOrder);
  qNo = p.qNo;
  lives = p.lives;
  levelScore = p.levelScore;
  levelCorrect = p.levelCorrect;
  moveElephant(levelNo);
  show("game");
  if (p.stage === "play") {
    showQuestion();
  } else {
    nextQuestion();   // the last answer was already counted, so move on
  }
}

function discardProgress() {
  if (!confirm("Delete the saved game? This cannot be undone.")) return;
  clearProgress();
  refreshContinue();
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
    var ok = confirm("Leave the game? Your progress is saved on this device, so you can continue later.");
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
$("soundBtn").addEventListener("click", toggleSound);
$("textBtn").addEventListener("click", changeTextSize);
$("contrastBtn").addEventListener("click", toggleContrast);
$("readBtn").addEventListener("click", readQuestion);
$("certBtn").addEventListener("click", showCertificate);
$("certBack").addEventListener("click", function () { show("final"); });
$("printBtn").addEventListener("click", function () { window.print(); });
$("certName").addEventListener("input", fillCertificate);
$("clearBoardBtn").addEventListener("click", clearBoard);
$("continueBtn").addEventListener("click", continueGame);
$("discardBtn").addEventListener("click", discardProgress);

// the sound system can only start after a tap, so wake it on the first click
document.addEventListener("click", function () {
  if (soundOn) getAudio();
});

// computer keyboard: A to D or 1 to 4 choose an answer
document.addEventListener("keydown", function (e) {
  if (!$("game").classList.contains("active") || answered) return;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  var key = e.key.toLowerCase();
  var pos = "abcd".indexOf(key);
  if (pos === -1) pos = "1234".indexOf(key);
  if (pos === -1) return;
  var buttons = document.querySelectorAll(".option");
  if (buttons[pos] && !buttons[pos].disabled) buttons[pos].click();
});

if (!canSpeak) {
  $("readBtn").classList.add("hidden");
}
drawSoundButton();
applyLook();
refreshContinue();