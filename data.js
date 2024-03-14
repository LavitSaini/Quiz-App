let questionsArray = [
  {
    title: "What is HTML stands for?",
    correctAnswer: 1,
    options: [
      "Hypertext Markup Lage",
      "Hypertext Markup Language",
      "Hypertext Macup Language",
      "Hyperterm Markup Language",
    ],
  },
  {
    title: "What is CSS stands for?",
    correctAnswer: 2,
    options: [
      "Cumputer Style Sheets",
      "Camel Style Sheets",
      "Cascading Style Sheets",
      "Cascading Style Street",
    ],
  },
  {
    title: "What is the correct HTML element for inserting a line break?",
    correctAnswer: 2,
    options: ["<break>", "<lb>", "<br>", "<newline>"],
  },
  {
    title: "Which CSS property is used to change the text color of an element?",
    correctAnswer: 0,
    options: ["color", "text-color", "font-color", "foreground-color"],
  },
  {
    title: "Which HTML attribute is used to define inline styles?",
    correctAnswer: 0,
    options: ["style", "class", "styles", "font"],
  },
  {
    title:
      "Which CSS property is used to control the space between individual letters?",
    correctAnswer: 2,
    options: ["word-spacing", "line-height", "letter-spacing", "text-spacing"],
  },
  {
    title: "What is the default value of the display property in CSS?",
    correctAnswer: 1,
    options: ["inline", "block", "inline-block", "none"],
  },
  {
    title:
      "Which of the following selectors will select all elements of a specific class?",
    correctAnswer: 0,
    options: [".classname", "#classname", "classname", "*"],
  },
  {
    title: "What is the correct HTML for creating a hyperlink?",
    correctAnswer: 1,
    options: [
      "<a url='http://www.example.com'>Example</a>",
      "<a href='http://www.example.com'>Example</a>",
      "<a link='http://www.example.com'>Example</a>",
      "<a>http://www.example.com</a>",
    ],
  },
  // Add new questions below
  {
    title: "What is the purpose of JavaScript?",
    correctAnswer: 0,
    options: [
      "To make web pages interactive",
      "To style web pages",
      "To define the structure of web pages",
      "To query databases",
    ],
  },
  {
    title: "Which HTML tag is used to define an unordered list?",
    correctAnswer: 0,
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
  },
  // Add more questions...
  {
    title: "What is the correct syntax for referring to an external script called 'script.js'?",
    correctAnswer: 0,
    options: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script file='script.js'>",
    ],
  },
  {
    title: "Which event occurs when the user clicks on an HTML element?",
    correctAnswer: 2,
    options: [
      "onmouseover",
      "onchange",
      "onclick",
      "onmouseclick",
    ],
  },
  {
    title: "What is the correct way to comment out multiple lines in JavaScript?",
    correctAnswer: 0,
    options: [
      "/* This is a comment */",
      "// This is a comment //",
      "<!-- This is a comment -->",
      "// This is a comment",
    ],
  },
  {
    title: "How do you declare a JavaScript variable?",
    correctAnswer: 0,
    options: [
      "var carName;",
      "v carName;",
      "variable carName;",
      "variable carName",
    ],
  },
  {
    title: "Inside which HTML element do we put the JavaScript?",
    correctAnswer: 2,
    options: [
      "<js>",
      "<javascript>",
      "<script>",
      "<scripting>",
    ],
  },
  {
    title: "How can you add a comment in a JavaScript?",
    correctAnswer: 1,
    options: [
      "'This is a comment",
      "//This is a comment",
      "<!--This is a comment-->",
      "*/This is a comment/*",
    ],
  },
  {
    title: "How do you create a function in JavaScript?",
    correctAnswer: 1,
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function myFunction[]",
    ],
  },
  {
    title: "How do you call a function named 'myFunction'?",
    correctAnswer: 0,
    options: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "invoke myFunction()",
    ],
  },
  {
    title: "How do you write 'Hello World' in an alert box?",
    correctAnswer: 3,
    options: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
    ],
  },
  {
    title: "How do you create an object in JavaScript?",
    correctAnswer: 0,
    options: [
      "var myObject = {};",
      "var myObject = ();",
      "var myObject = [];",
      "var myObject = '';",
    ],
  },
  {
    title: "Which operator is used to assign a value to a variable?",
    correctAnswer: 1,
    options: [
      "*",
      "=",
      "-",
      "+",
    ],
  },
  {
    title: "What will the following code return: Boolean(10 > 9)",
    correctAnswer: 0,
    options: [
      "true",
      "false",
      "undefined",
      "10 > 9",
    ],
  },
  {
    title: "Which of the following is not a JavaScript data type?",
    correctAnswer: 3,
    options: [
      "number",
      "boolean",
      "string",
      "float",
    ],
  },
  {
    title: "How do you round the number 7.25, to the nearest integer?",
    correctAnswer: 0,
    options: [
      "Math.round(7.25)",
      "round(7.25)",
      "Math.rnd(7.25)",
      "rnd(7.25)",
    ],
  },
  {
    title: "How do you find the number with the highest value of x and y?",
    correctAnswer: 0,
    options: [
      "Math.max(x, y)",
      "Math.ceil(x, y)",
      "Math.floor(x, y)",
      "Math.round(x, y)",
    ],
  },
  {
    title: "What is the correct JavaScript syntax for opening a new window called 'myWindow'?",
    correctAnswer: 0,
    options: [
      "window.open('url','myWindow')",
      "window.open('','myWindow')",
      "new Window('url','myWindow')",
      "open.newWindow('url','myWindow')",
    ],
  },
  {
    title: "Which HTML tag is used to define a table?",
    correctAnswer: 2,
    options: [
      "<tb>",
      "<tr>",
      "<table>",
      "<th>",
    ],
  },
  {
    title: "How can you make a numbered list?",
    correctAnswer: 0,
    options: [
      "<ol>",
      "<dl>",
      "<ul>",
      "<list>",
    ],
  },
  {
    title: "What is the correct HTML for making a checkbox?",
    correctAnswer: 1,
    options: [
      "<checkbox>",
      "<input type='checkbox'>",
      "<check>",
      "<input type='check'>",
    ],
  },
];

