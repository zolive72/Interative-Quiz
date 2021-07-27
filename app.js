const form = document.querySelector("form");

const correctAnswers = ["B", "A", "B", "A", "B"];

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;


    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ];
    
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            return score += 20;
        }
    })
    alert(`Você conseguiu ${score} % de respostas certas`);
})