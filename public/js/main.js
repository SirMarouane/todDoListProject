// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ variables $$$$$$$$$$$$$$$$$$$$$$$$$$
let body = document.querySelector("body")

let inputTask = document.querySelector("input")

let addButton = document.querySelector(".addButton")

let buttonAll = document.querySelector(".sort").querySelector("button")
let buttonProgress = document.querySelector(".sort").querySelectorAll("button")[1]
let buttonCompleted = document.querySelector(".sort").querySelectorAll("button")[2]

let section2 = document.querySelector(".section2")

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ addButton $$$$$$$$$$$$$$$$$$$$$$$$$$
function getValue (newDiv, oldDiv) {

    newDiv.innerText = oldDiv.value 
    oldDiv.value = ""
 }

inputTask.addEventListener("keypress", (e) => {         
    if (e.key === "Enter")
// create new div

if (inputTask.value) {

    let task1 = document.createElement("div")
        body.appendChild(section2)
        section2.appendChild(task1)
    
        task1.setAttribute("class", "newDiv")

//create new p
        let p = document.createElement("p")
            task1.appendChild(p)

            p.setAttribute("contenteditable", "true")

// recuperate text with function

  getValue(p, inputTask)

// create second div

let newDiv2 = document.createElement("div")
    task1.appendChild(newDiv2)

    newDiv2.setAttribute("class", "newDiv2")

  // valider button

  let valider = document.createElement("button")
  newDiv2.appendChild(valider)

  valider.innerText = "Confirm"

  valider.setAttribute("class", "buttonValid")


  let supprimer = document.createElement("button")
  newDiv2.appendChild(supprimer)

  supprimer.innerText = "Delete"

  supprimer.setAttribute("class", "buttonDelete")

  // click sur le boutton

valider.addEventListener("click", () => {
    task1.classList.toggle("newDiv3Button")

})

supprimer.addEventListener("click", () => {
    valider.innerText = "OUI"
    valider.style.background = "rgba(129, 237, 78, 0.858)"

    supprimer.innerText = "NON"
    supprimer.style.background = "rgba(184, 106, 106, 0.858)"

    valider.addEventListener("click", () => {
        task1.remove()
    
    
    })

    supprimer.addEventListener("click", () => {

        valider.innerText = "Confirm"
        valider.style.background = "rgba(0, 184, 12, 0.929);"

        supprimer.innerText = "Delete"
        supprimer.style.background = "rgba(184, 106, 106, 0.858)"
    
    
    })

})

buttonCompleted.addEventListener("click", () => {


if (!task1.classList.contains("newDiv3Button")) {
    task1.style.display = "none"
}

else {
    task1.style.display = "flex"
}

})



buttonProgress.addEventListener("click", () => {


    if (task1.classList.contains("newDiv3Button")) {
        task1.style.display = "none"
  
    }

    else {
        task1.style.display = "flex"
    }
    
    })

buttonAll.addEventListener("click", () => {


        if (task1.classList.contains("newDiv")) {
            task1.style.display = "flex"
      
        }
    
        
        
        })






}

})



