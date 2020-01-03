const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answers: [
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Who is making the Web standards?",
    answers: [
      "Microsoft",
      "Google",
      "Mozilla",
      "The World Wide Web Consortium"
    ],
    correct: "The World Wide Web Consortium"
  },
  {
    id: 3,
    question: "Choose the correct HTML element for the largest heading:",
    answers: ["<h1>", "<head>", "<h6>", "<heading>"],
    correct: "<h1>"
  },
  {
    id: 4,
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<lb>", "<br>", "<break>"],
    correct: "<br>"
  },
  {
    id: 5,
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<javascript>", "<script>", "<scripting>", "<js>"],
    correct: "<script>"
  },
  {
    id: 6,
    question: 'What is a correct syntax to output "Hello World" in Python?',
    answers: [
      'echo("Hello World");',
      'p("Hello World")',
      'echo "Hello World"',
      'print("Hello World")'
    ],
    correct: 'print("Hello World")'
  },
  {
    id: 7,
    question: "How do you insert COMMENTS in Python code?",
    answers: [
      "#This is a comment",
      "//This is a comment",
      "/*This is a comment*/"
    ],
    correct: "#This is a comment"
  },
  {
    id: 8,
    question: "How do you create a variable with the numeric value 5?",
    answers: ["Both the other answers are correct", "x = int(5)", "x = 5"],
    correct: "Both the other answers are correct"
  },
  {
    id: 9,
    question: "What is the correct file extension for Python files?",
    answers: [".py", ".pyth", ".pyt", ".pt"],
    correct: ".py"
  }
];

export default (n = 5) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));
