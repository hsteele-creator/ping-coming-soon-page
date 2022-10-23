const formInput = document.querySelector("#subscribe")
const emailInput = document.querySelector(".email")
const provideEmailMsg = document.querySelector("#provide-email")

formInput.addEventListener("submit", function(e) {
    e.preventDefault()
    provideEmailMsg.classList.toggle("hidden")

})