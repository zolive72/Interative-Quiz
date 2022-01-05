const form = document.querySelector("form");
const containerResult = document.querySelector('#container-result');

const correctAnswers = ["B", "A", "B", "A", "B"];

let score = 0;

const getUserAnswers = () => correctAnswers.map((_, index) => 
    form[`inputQuestion${index + 1}`].value);

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index];

        if (isUserAnswerCorrect) {
            score += 20;
        }
    })
}

const showFinalScore = () => {
    containerResult.classList.replace('hidden', 'visible');

    scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

const animateFinalScore = () => {
    let counter = 0;

    const timer = setInterval(() => {
        if (counter === score) {
            clearTimeout(timer);
        }

        containerResult.querySelector('span').textContent = `${counter++}%`;
    }, 10);
}

form.addEventListener('submit', event => {
    event.preventDefault();
    score = 0;

    const userAnswers = getUserAnswers();
    calculateUserScore(userAnswers);
    showFinalScore();
    animateFinalScore();
})
