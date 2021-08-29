const activePanel = document.querySelectorAll(".panel")
/*
activePanel[0].addEventListener("click", function () {
  console.log("hdjshjd")
})
*/
activePanel.forEach((panel) => {
  panel.addEventListener("click", function (e) {
    removeveClasses()
    panel.classList.add("active")
  })
})

function removeveClasses() {
  activePanel.forEach((panel) => {
    panel.classList.remove("active")
  })
}
