//starts the quiz when start button is clicked
$('#start').on('click', function () {
    quiz.start();
})
    //all questions and answers with correct answers
    var questions = [{

    question: 'What tag does javascript use to link files?',

        answers: [' javascript', ' script', ' source', ' style'],

        correctAnswer: ' script'

    }, {
    question: 'Which of the following will write the message “Hello World!',

        answers: [' alertBox(“Hello World!”);', ' alert(Hello World!);', ' msgAlert(“Hello World!”);', ' alert(“Hello World!”);'],

        correctAnswer: ' alert("Hello World");'

    }, {
    question: 'JavaScript is a ___ -side programming language.',

        answers: ['Client', 'Server', 'Both', 'None'],

        correctAnswer: 'Both'

    }, {
    question: 'How is a variable declared in JavaScript?',

        answers: ['new', 'var', 'int', 'string'],

        correctAnswer: 'var'

    }, {
    question: 'What are primitive types in JavaScript?',

        answers: ['Boolean', 'String', 'Number', 'All of the above'],

        correctAnswer: 'All of the above'

    }, {
    question: 'Which is not a valid keyword in JavaScript?',
    
        answers: ['function', 'module', 'try', 'this'],
    
        correctAnswer: 'module'
    
    }];

//variables for quiz which start the quiz with 0 correct questions, 0 incorrect questions, 0 timer counter
var quiz = {

    correct: 0,
    
    incorrect: 0,
    
    counter: 30,
    
    countdown: function () {
        //timer function
        quiz.counter--;
        $('#counter').html(quiz.counter);
            if (quiz.counter <= 0) {
                console.log("Time is up!");
                quiz.done();

        }
    },
    start: function () {
    //start quiz function
        timer = setInterval(quiz.countdown, 1000);
        //appear timer
        $('#question-container').prepend('<h2>Time Remaining: <span id="counter">30</span> seconds </h2>');
        //removes the start button
        $('#start').remove();
        //for loop to make questions and answers append after the start button is clicked
        for (var i = 0; i < questions.length; i++) {
            $('#question-container').append('<h2>' + questions[i].question + '</h2>')
    
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#question-container').append("<h2><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
    
            }
        }
    },
    //end quiz function
    done: function () {
    
        $.each($('input[name="question-0"]:checked'),
         //function to check every question and answer is correct
        function () {
                if ($(this).val() == questions[0].correctAnswer) {
    
                    quiz.correct++;
    
                } else {
    
                    quiz.incorrect++;
    
                }
            });
        $.each($('input[name="question-1"]:checked'),
            function () {
                if ($(this).val() == questions[1].correctAnswer) {
                
                    quiz.correct++;
                
                } else {
                
                    quiz.incorrect++;
                
                }
            });
        $.each($('input[name="question-2"]:checked'),
            function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    
                    quiz.correct++;
                
                } else {
                    
                    quiz.incorrect++;
                
                }
            });
        $.each($('input[name="question-3"]:checked'),
            function () {
                if ($(this).val() == questions[3].correctAnswer) {
                   
                    quiz.correct++;
                
                } else {
                    
                    quiz.incorrect++;
                
                }
            });
        $.each($('input[name="question-4"]:checked'),
            function () {
                if ($(this).val() == questions[4].correctAnswer) {
                    
                    quiz.correct++;
                
                } else {
                
                    quiz.incorrect++;
                
                }
            });
        $.each($('input[name="question-5"]:checked'),
            function () {
                if ($(this).val() == questions[5].correctAnswer) {
                
                    quiz.correct++;
                
                } else {
                
                    quiz.incorrect++;
                
                }
            });
        this.result();

    },
    //scoreboard function
    result: function () {

        clearInterval(timer);
        //removes questions and answers from website
        $('#question-container h2').remove();
        //adds high score title 
        $('#question-container').append("<h3>High Scores</h3>");
        //adds correct answers score
        $('#question-container').append("<h3>Correct Answers:" + this.correct + "</h3>");
        //adds incorrect answers scored
        $('#question-container').append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
        //adds unanswered if user did not select the answer
        $('#question-container').append("<h3>Unanswered:" + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}