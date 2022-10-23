const formInput = document.querySelector("#subscribe")
const emailInput = document.querySelector(".email")

formInput.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(emailInput.value)

})