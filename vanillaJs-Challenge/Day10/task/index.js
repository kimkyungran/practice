

const range = document.getElementById("js-range");
const title = document.querySelector('.js-title');
const guessform = document.getElementById ('js-guess'),
    result = document.getElementById('js-result');


function rangeChange () {
    const selectRange = title.querySelector("span");
    selectRange.innerHTML = range.value;
}

function handleGuessSubmit (e) {
    e.preventDefault();
    const input = guessform.querySelector("input");
    if (input.value === ""){
        // console.log(input.value)
        return;
    }
    const max = range.value; 
    const userGuess = parseInt(input.value, 10); // 10에서 끊어주는건가 ? 
    const random = Math.ceil(Math.random() * max);
    const resultSpan = result.querySelector('span');

    resultSpan.innerHTML = ` You chose: ${userGuess}, the machine chose ${random}.<br /> <strong>${userGuess === random ? "You won!" : "You Rose"}</strong>`
    console.log(random);


}

range.addEventListener("input", rangeChange);
guessform.addEventListener("submit", handleGuessSubmit)