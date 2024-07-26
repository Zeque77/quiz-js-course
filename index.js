const correctAnswer = ["B", "C", "B", "C", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const reload = document.querySelector(".reload");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    form.flexRadioDefault1.value,
    form.flexRadioDefault2.value,
    form.flexRadioDefault3.value,
    form.flexRadioDefault4.value,
    form.flexRadioDefault5.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `Acertaste ${score}/5!`;
});

function handleClick() {
  window.location.reload();
}

reload.addEventListener("click", handleClick);
