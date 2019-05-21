function Quiz (questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function (answer) {
    if (this.getCurrentQuestion().this.CorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
}

