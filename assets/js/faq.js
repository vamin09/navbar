document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            
            answer.classList.toggle("active");

            
            if (answer.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "−"; 
            } else {
                answer.style.maxHeight = null;
                icon.textContent = "+"; 
            }
        });
    });
});
