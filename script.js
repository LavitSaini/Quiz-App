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
    constructor(root, questions = [], score = 1) {
      this.root = root;
      this.questions = questions;
      this.score = score;
      this.activeIndex = 0;
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
        this.createUI();
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

    handleForm(e, activeQuestion, div, input) {
      e.preventDefault();
      if (input.checked) {
        if (activeQuestion.isCorrect(input.value) === true) {
          div.classList.add("correct");
          setTimeout(() => {
            this.updateScore();
            this.nextQuestion();
          }, 500);
        } else {
          div.classList.add("wrong");
        }
      } else {
        if (input.value === activeQuestion.getCorrectAnswer()) {
          div.classList.add("correct");
          setTimeout(() => {
            this.nextQuestion();
          }, 500);
        }
      }
      if (this.activeIndex === this.questions.length - 1) {
        setTimeout(() => {
          quizBox.style.display = "none";
          quizMenuBox.style.display = "flex";
          finalScore.innerText = `Your Score is ${this.score}`;
          totalScore.innerText = `Total Score is ${this.questions.length}`;
        }, 600)
      }
    }

    createUI() {
      this.root.innerHTML = "";
      let activeQuestion = this.questions[this.activeIndex];

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
        let input = document.createElement("input");
        let label = document.createElement("label");

        // Adding classes in elements
        div.classList.add("option");

        // Adding attribute in elements
        input.type = "radio";
        input.name = "options";
        input.value = option;
        input.id = `option-${index}`;
        label.setAttribute("for", `option-${index}`);

        // Adding content in elements
        label.innerText = option;

        // Appending elements
        div.append(input, label);
        options.append(div);

        // Adding submit event listener on form
        form.addEventListener("submit", (e) => {
          this.handleForm(e, activeQuestion, div, input);
        });
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
    let quiz = new Quiz(quizRoot);
    questionsArray.forEach((question) => {
      quiz.add(question.title, question.options, question.correctAnswer);
    });

    quiz.createUI();
    quiz.totalQuestions();
    scoreCounter.innerText = `Score: ${quiz.score}`;

    nextBtn.addEventListener("click", quiz.nextQuestion.bind(quiz));
    prevBtn.addEventListener("click", quiz.prevQuestion.bind(quiz));
  }

  init();

  playAgainBtn.addEventListener("click", () => {
    quizMenuBox.style.display = "none";
    quizBox.style.display = "block";
    init();
    nextBtn.style.display = "block";
  });
}

main();
