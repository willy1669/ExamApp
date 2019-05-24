var questions = [ 
    new Question("Who was the first President of United States of America?", ["George Washington", "Thomas Jefferson"], "George Washington"),
    new Question("What is the answer to the ultimate question of life, The Universe, and Everything?", ["Pi", "42"], "42")
]

//create quiz
var quiz = new quiz(questions);

QuizUI.displayNext()