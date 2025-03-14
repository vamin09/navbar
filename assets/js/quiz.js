const correctAnswers = {
    q1: "4",
    q2: "4",
    q3: "3",
    q4: "3",
    q5: "3"
};

document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let score = 0;
    
    for (let question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected) {
            if (selected.value === correctAnswers[question]) {
                score += 2;
            } else {
                score -= 1;
            }
        }
    }

    document.getElementById("result").textContent = `Your score: ${score}`;
    document.getElementById("result").style.display = "block"; // Make it visible

});

let timeLeft = 60;
const timerDisplay = document.getElementById("time");

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        document.getElementById("quiz-form").submit(); // Auto-submit when time runs out
    }
}

updateTimer();
