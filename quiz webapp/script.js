document.addEventListener("DOMContentLoaded", function() {
    const quizSection = document.getElementById("quiz-section");
    const loginSection = document.getElementById("login-section");
    const signupSection = document.getElementById("signup-section");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const signupLink = document.getElementById("signup-link");

    // Check if user is already logged in
    const isLoggedIn = checkLoggedIn();

    if (isLoggedIn) {
        // Hide login and signup sections, show quiz section
        loginSection.style.display = "none";
        signupSection.style.display = "none";
        quizSection.style.display = "block";
        startQuiz();
    } else {
        // Show login section, hide signup and quiz sections
        loginSection.style.display = "block";
        signupSection.style.display = "none";
        quizSection.style.display = "none";
    }

    // Event listener for login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Perform login logic (validate username and password)
        const loginSuccessful = performLogin(username, password);

        if (loginSuccessful) {
            // Hide login section, show quiz section
            loginSection.style.display = "none";
            quizSection.style.display = "block";
            startQuiz();
        } else {
            // Display error message or handle unsuccessful login
            alert("Invalid username or password. Please try again.");
        }
    });

    // Event listener for signup link click
    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Hide login section, show signup section
        loginSection.style.display = "none";
        signupSection.style.display = "block";
    });

    // Event listener for signup form submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        // Perform signup logic (create new user)
        const signupSuccessful = performSignup(newUsername, newPassword);

        if (signupSuccessful) {
            // Show success message or redirect to login page
            alert("Signup successful! Please log in.");
            // Show login section, hide signup section
            loginSection.style.display = "block";
            signupSection.style.display = "none";
        } else {
            // Display error message or handle unsuccessful signup
            alert("Signup failed. Please try again.");
        }
    });

    // Dummy function to simulate login logic
    function performLogin(username, password) {
        // Implement your login logic here (e.g., check username and password against a database)
        // For demonstration purposes, I'm assuming login is successful if both fields are filled out
        return username.trim() !== "" && password.trim() !== "";
    }

    // Dummy function to simulate signup logic
    function performSignup(username, password) {
        // Implement your signup logic here (e.g., add new user to a database)
        // For demonstration purposes, I'm assuming signup is successful if both fields are filled out
        return username.trim() !== "" && password.trim() !== "";
    }

    // Dummy function to check if user is already logged in (for demonstration purposes)
    function checkLoggedIn() {
        // Implement your check for whether a user is logged in (e.g., check if there's a session cookie)
        // For demonstration purposes, I'm assuming the user is logged in if there's a session cookie
        return false;
    }
});
const questions = [{
        question: "which of the following can read and render html webpages?",
        answers: [
            { text: "server", correct: "false" },
            { text: "head tak", correct: "false" },
            { text: "web browser", correct: "true" },
            { text: "empty", correct: "false" },
        ]
    },
    {
        question: "dentify the range of byte data types in JavaScript?",
        answers: [
            { text: "-10 to 9", correct: "false" },
            { text: "-128 to 127", correct: "true" },
            { text: "-15 to 15", correct: "false" },
            { text: "1 to 10", correct: "false" },
        ]

    },
    {
        question: "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript ?",
        answers: [
            { text: "new", correct: "true" },
            { text: "new malloc", correct: "false" },
            { text: "malloc", correct: "false" },
            { text: "alloc", correct: "false" },
        ]

    },
    {
        question: "The latest HTML standard is?",
        answers: [
            { text: "HTML 4.0", correct: "false" },
            { text: "HTML 5.0", correct: "true" },
            { text: "XML", correct: "false" },
            { text: "SGML", correct: "false" },
        ]

    },
    {
        question: "Why were cookies designed?",
        answers: [
            { text: "for client-side programming ", correct: "false" },
            { text: "for server-side programming", correct: "true" },
            { text: "both a and b", correct: "false" },
            { text: "none", correct: "false" },
        ]

    },
    {
        question: "What are variables used in JavaScript programs ?",
        answers: [
            { text: "variying randomly", correct: "false" },
            { text: "storing number,values", correct: "true" },
            { text: "both a and b", correct: "false" },
            { text: "none", correct: "false" },
        ]

    },
    {
        question: " Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: " link", correct: "false" },
            { text: " href", correct: "false" },
            { text: "a", correct: "true" },
            { text: "hyperlink", correct: "false" },
        ]

    },
    {
        question: "Which of the following is a popular front-end framework for building user interfaces in JavaScript?",
        answers: [
            { text: "Django", correct: "false" },
            { text: "Angular", correct: "true" },
            { text: "Flask", correct: "false" },
            { text: "Node.js", correct: "false" },
        ]

    },
    {
        question: "Which of the following is not associated with web socket communication?",
        answers: [
            { text: "https", correct: "false" },
            { text: "wss", correct: "false" },
            { text: "http", correct: "true" },
            { text: "ws", correct: "false" },
        ]

    },
    {
        question: "Which element to used to give title to a table?",
        answers: [
            { text: "Caption", correct: "true" },
            { text: "Headline", correct: "false" },
            { text: "Title", correct: "false" },
            { text: "Heading", correct: "false" },
        ]

    },
    {
        question: " Which font format is used in web pages?",
        answers: [
            { text: "EOT", correct: "false" },
            { text: "WOFF 2.0", correct: "false" },
            { text: "WOFF", correct: "true" },
            { text: " SVG Fonts", correct: "false" },
        ]

    },
    {
        question: "Which HTML tag is used to create a form?",
        answers: [
            { text: "form", correct: "true" },
            { text: "input", correct: "false" },
            { text: "select", correct: "false" },
            { text: "textarea", correct: "false" },
        ]

    },
    {
        question: "Which of the following property is used to control the space between the border and content in a table?",
        answers: [
            { text: "border", correct: "false" },
            { text: "padding", correct: "true" },
            { text: "margin", correct: "false" },
            { text: "resize", correct: "false" },
        ]

    },
    {
        question: "Which of the following CSS Property controls how an element is positioned?",
        answers: [
            { text: "fix", correct: "false" },
            { text: "set", correct: "false" },
            { text: "static", correct: "false" },
            { text: "position", correct: "true" },
        ]

    },
    {
        question: "How many classes does bootstrap grid system has?",
        answers: [
            { text: "2", correct: "false" },
            { text: "3", correct: "false" },
            { text: "4", correct: "true" },
            { text: "1", correct: "false" },
        ]

    },
    {
        question: "What is the JavaScript keyword used to define a function?",
        answers: [
            { text: "var", correct: "false" },
            { text: "function", correct: "true" },
            { text: "let", correct: "false" },
            { text: "const", correct: "false" },
        ]

    },
    {
        question: "Which CSS property is used to specify the width of an element?",
        answers: [
            { text: "padding", correct: "false" },
            { text: "margin", correct: "false" },
            { text: "height", correct: "false" },
            { text: "width", correct: "true" },
        ]

    },
    {
        question: "What is Vue JS?",
        answers: [
            { text: "Scripting Language", correct: "false" },
            { text: " A framework", correct: "true" },
            { text: "Programming Language", correct: "false" },
            { text: "Directives", correct: "false" },
        ]

    },
    {
        question: "Which of the following bootstrap styles can be used to create a default progress bar?",
        answers: [
            { text: ".progress-bar", correct: "true" },
            { text: ".link-progress-bar", correct: "false" },
            { text: ".nav-progress", correct: "false" },
            { text: "All of the mentioned", correct: "false" },
        ]

    },
    {
        question: "React.js is written in which of the following language?",
        answers: [
            { text: "C++", correct: "false" },
            { text: "c", correct: "false" },
            { text: "java", correct: "false" },
            { text: "js", correct: "true" },
        ]

    },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next";
    ShowQuestion();

}

function ShowQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);

    }

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }

        button.disabled = true;

    });

    nextButton.style.display = "block";
}

function showScore() {

    resetState();

    questionElement.innerHTML = `You scored ${score} out of ${questions.

 length}!`;
    I

    nextButton.innerHTML = "Play Again";

    nextButton.style.display = "block";
}

function handleNextButton() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        ShowQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();