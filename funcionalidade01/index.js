const inputPassword = document.querySelector("#input-password")
const onVisibility = document.querySelector("#on-visibility")
const offVisibility = document.querySelector("#off-visibility")

offVisibility.addEventListener("click", () => {
    inputPassword.setAttribute("type","text")
    onVisibility.style.display = "block"
    offVisibility.style.display = "none"
    inputPassword.focus()
})
onVisibility.addEventListener("click", () => {
    inputPassword.setAttribute("type","password")
    onVisibility.style.display = "none"
    offVisibility.style.display = "block"
})