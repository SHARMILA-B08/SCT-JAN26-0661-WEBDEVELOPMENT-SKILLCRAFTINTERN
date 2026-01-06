const quiz = [
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    q: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    q: "Which tag is used for JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2
  },
  {
    q: "Which method is used to select an element by ID?",
    options: [
      "getElement()",
      "querySelectorAll()",
      "getElementById()",
      "selectById()"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: 2
  },
  {
    q: "CSS Flexbox is mainly used for?",
    options: [
      "Animations",
      "Layout alignment",
      "Data storage",
      "API calls"
    ],
    answer: 1
  },
  {
    q: "Which event occurs when a button is clicked?",
    options: ["onpress", "onclick", "onhover", "onsubmit"],
    answer: 1
  },
  {
    q: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: 1
  },
  {
    q: "Which HTML attribute is used for links?",
    options: ["src", "href", "link", "url"],
    answer: 1
  },
  {
    q: "Which function converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: 0
  }
];

let index = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  document.getElementById("nextBtn").style.display = "none";

  const q = quiz[index];
  document.getElementById("question").innerText = q.q;
  document.getElementById("progress").innerText =
    `Question ${index + 1} of ${quiz.length}`;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(btn, i);
    optionsBox.appendChild(btn);
  });
}

function selectAnswer(btn, i) {
  if (answered) return;
  answered = true;

  const correct = quiz[index].answer;
  const buttons = document.querySelectorAll(".options button");

  buttons.forEach((b, idx) => {
    if (idx === correct) b.classList.add("correct");
    if (idx === i && idx !== correct) b.classList.add("wrong");
  });

  if (i === correct) score++;
  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h1>🔥 Quiz Completed!</h1>
      <p style="text-align:center;font-size:18px;">
        Your Score: <b>${score} / ${quiz.length}</b>
      </p>
    `;
  }
}

loadQuestion();
