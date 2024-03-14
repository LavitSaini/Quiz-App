function main() {
  let quizRoot = document.querySelector(".quiz-question");
  let prevBtn = document.querySelector(".previous");
  let nextBtn = document.querySelector(".next");
  let totalQuestionsCounter = document.querySelector(".questions-total");
  let scoreCounter = document.querySelector(".score");

  let quizBox = document.querySelector(".quiz");
  let quizMenuBox = document.querySelector(".quiz-menu-box");
  let playAgainBtn = document.querySelector(".play-again");
  let finalScore = document.querySelector(".final-score");
  let totalScore = document.querySelector(".total-score");

  class Quiz {
    constructor(root, questions = [], score = 0) {
      this.root = root;
      this.questions = questions;
      this.score = score;
      this.activeIndex = 0;
      this.userAnswers = [];
    }
    add(title, options, correctAnswer) {
      let question = new Question(title, options, correctAnswer);
      this.questions.push(question);
    }

    disableButton(button) {
      button.style.display = "none";
    }

    enableButtons(next, prev) {
      next.style.display = "block";
      prev.style.display = "block";
    }

    nextQuestion() {
      if (this.activeIndex === this.questions.length - 1) {
        this.disableButton(nextBtn);
      } else {
        this.activeIndex += 1;
        this.totalQuestions();
        this.enableButtons(nextBtn, prevBtn);
        this.createUI();
      }
    }
    prevQuestion() {
      if (this.activeIndex === 0) {
        this.disableButton(prevBtn);
      } else {
        this.activeIndex -= 1;
        this.totalQuestions();
        this.enableButtons(nextBtn, prevBtn);
        this.showUserAnswer();
      }
    }
    updateScore() {
      this.score += 1;
      scoreCounter.innerText = `Score: ${this.score}`;
    }

    totalQuestions() {
      totalQuestionsCounter.innerText = `${this.activeIndex + 1} of ${
        questionsArray.length
      } Questions`;
    }

    saveUserAnswer(activeQuestion, userAnswer) {
      activeQuestion.userAnswer = userAnswer;
      this.userAnswers.push(activeQuestion);
    }

    showUserAnswer() {
      let savedQuestion = this.userAnswers[this.activeIndex];
      this.createUI(savedQuestion);
    }

    handleForm(e, activeQuestion, div, input, button) {
      e.preventDefault();

      // Checking correct question (Adding classes and calling methods)
      if (input.checked) {
        if (activeQuestion.isCorrect(input.value) === true) {
          div.classList.add("correct");
          this.saveUserAnswer(activeQuestion, input.value);
          setTimeout(() => {
            this.updateScore();
            this.nextQuestion();
          }, 500);
        } else {
          div.classList.add("wrong");
          this.saveUserAnswer(activeQuestion, input.value);
        }
      } else {
        if (input.value === activeQuestion.getCorrectAnswer()) {
          div.classList.add("correct");
          setTimeout(() => {
            this.nextQuestion();
          }, 500);
        }
      }

      // Checking if last question is submitted then menu box is visible
      if (this.activeIndex === this.questions.length - 1) {
        setTimeout(() => {
          quizBox.style.display = "none";
          quizMenuBox.style.display = "flex";
          finalScore.innerText = `Your Score is ${this.score}`;
          totalScore.innerText = `Total Score is ${this.questions.length}`;
        }, 800);
      }
    }

    createUI(activeQuestion = this.questions[this.activeIndex]) {
      this.root.innerHTML = "";

      // Creating elements
      let form = document.createElement("form");
      let fieldset = document.createElement("fieldset");
      let legend = document.createElement("legend");
      let options = document.createElement("div");
      let questionSubmit = document.createElement("div");
      let button = document.createElement("button");

      activeQuestion.options.forEach((option, index) => {
        // Creating elements
        let div = document.createElement("div");
        let span = document.createElement("span");
        let input = document.createElement("input");
        let label = document.createElement("label");

        // Adding classes in elements
        div.classList.add("option");
        span.classList.add("hiding-checkbox");

        // Adding attribute in elements
        input.type = "radio";
        input.name = "options";
        input.value = option;
        input.id = `option-${index}`;
        label.setAttribute("for", `option-${index}`);

        // Adding content in elements
        label.innerText = option;

        // Appending elements
        div.append(span, input, label);
        options.append(div);

        // Adding event listener on input radio button (Once one radio button is checked then submit button is visible)
        input.addEventListener("change", () => {
          button.style.display = "block";
        });

        // Adding submit event listener on form
        form.addEventListener("submit", (e) => {
          this.handleForm(e, activeQuestion, div, input, button);
        });

        if (activeQuestion.userAnswer) {
          if (
            input.value === activeQuestion.options[activeQuestion.correctAnswer]
          ) {
            div.classList.add("correct");
            if (input.value === activeQuestion.userAnswer) {
              input.checked = true;
            }
          } else if (input.value === activeQuestion.userAnswer) {
            input.checked = true;
            div.classList.add("wrong");
          }
          span.style.zIndex = "1";
          label.setAttribute("for", "");
        }
      });
      // Adding classes in elements
      form.classList.add("quiz-question-form");
      fieldset.classList.add("question");
      legend.classList.add("question-title");
      options.classList.add("options");
      questionSubmit.classList.add("question-submit");
      button.classList.add("btn");

      // Adding content in elements
      legend.innerText = activeQuestion.title;
      button.innerText = "Submit";

      // Hiding submit button
      button.style.display = "none";

      // Appending elements
      questionSubmit.append(button);
      fieldset.append(legend, options, questionSubmit);
      form.append(fieldset);
      this.root.append(form);

      // Check prev and next buttons
      if (this.activeIndex === 0) {
        this.disableButton(prevBtn);
      } else if (this.activeIndex === this.questions.length - 1) {
        this.disableButton(nextBtn);
      }

      // Hiding submit button that questions already attempted
      if (activeQuestion.userAnswer) {
        button.style.display = "none";
      }
    }
  }

  class Question {
    constructor(title, options, correctAnswer) {
      this.title = title;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
      return this.options[this.correctAnswer] === answer;
    }

    getCorrectAnswer() {
      return this.options[this.correctAnswer];
    }
  }

  function init() {
    // Creating instance of quiz class
    let quiz = new Quiz(quizRoot);
    questionsArray.forEach((question) => {
      quiz.add(question.title, question.options, question.correctAnswer);
    });

    quiz.createUI();
    quiz.totalQuestions();
    // Display score default value 0
    scoreCounter.innerText = `Score: ${quiz.score}`;

    // Adding event listener on next and previous buttons
    nextBtn.addEventListener("click", quiz.nextQuestion.bind(quiz));
    prevBtn.addEventListener("click", quiz.prevQuestion.bind(quiz));
  }

  init();

  // Adding event listener on playAgain button and restart the game
  playAgainBtn.addEventListener("click", () => {
    quizMenuBox.style.display = "none";
    quizBox.style.display = "block";
    nextBtn.style.display = "block";
    init();
  });
}

main();
