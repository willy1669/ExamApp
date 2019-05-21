function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.protoype.isCorrectAnswer = function (choice) {
    return this.answer  === choice;
}