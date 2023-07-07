

// saveJokeButton.addEventListener('click', function(){
//   /// createJoke()

//     let newP = document.createElement('p')
//     let newP2 = document.createElement('p')
//     let xbutton = document.createElement('button')
//     xbutton.addEventListener('click', deleteTask)
//     xbutton.textContent = "delete joke"

//     newP.textContent = setup.textContent
//     newP2.textContent = punchline.textContent

//     document.getElementById("joke-list").appendChild(newP)
    
//     popsicle3 = {
    
//         "setup": newP.textContent,
//         "punchline": newP2.textContent,
//     }
    
//     newP.appendChild(newP2)
//     newP.appendChild(xbutton)

//     getJokes()
//     return popsicle3
// })


// function createJoke(){

//     let newDiv = document.createElement('div')
//     let newP = document.createElement('p')
//     let newP2 = document.createElement('p')
//     let xbutton = document.createElement('button')
//     xbutton.addEventListener('click', deleteTask)
//     xbutton.textContent = "delete joke"
//     newP.textContent = taskList.value
//     newP2.textContent = taskDescription.value
    
//     document.getElementById("joke-list").appendChild(newDiv)
    

//     newDiv.appendChild(newP)
//     newP.appendChild(newP2)
//     newP.appendChild(xbutton)

//     taskList.value = ""
//     taskDescription.value = ""

//     popsicle3 = {
//         "setup": newP.textContent,
//         "punchline": newP2.textContent,
//     }
    
//     return popsicle3
// }

// function deleteTask(e){
//     e.target.parentNode.remove()
//   }