const emailInput = document.querySelector("#email")
const emailWarning = document.querySelector("#provide-email")
const notifyButton = document.querySelector("#notify")

const valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/


notifyButton.addEventListener("click", function(e) {

    e.preventDefault()
    if(!emailInput.value.match(valid)) {
        emailWarning.classList.remove("hidden")
    } else {
        emailWarning.classList.add("hidden")
    }

    emailInput.value = "";

})


// notifyButton.addEventListener("submit", function() {
//     emailWarning.classList.toggle("hidden")
// })

