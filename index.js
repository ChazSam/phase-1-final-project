/////////------Choose Popsicle-----/////////////////////////////
//assignments for each element
const popColor = document.getElementById('pop-color') // color dropdown
const popFlavor = document.getElementById('pop-flavor') // flavor dropdown
const popType = document.getElementById('pop-type') // popsicle shape dropdown
const popsicleChoice = document.getElementById('popsicle-choice') // click button 
const underPopsicle = document.getElementById('popsicle') //p tag in preview section
let popsicle1 // defines popsicle1 globally 

popsicleChoice.addEventListener('click', function(){ //event that takes the selections from all 3 popsicle choices, adds it to the preview, and return an object with info. 
     popsicle1 = { //creates objects within popsicle1
        "color": popColor.value,
        "flavor": popFlavor.value,
        "type" : popType.value
    } 
    underPopsicle.innerText = `${popsicle1.color} ${popsicle1.flavor} ${popsicle1.type}` // adds selection to the preview
    return popsicle1 
})

////////------Choose Pokemon-----///////////////////////////////////////////////////////////////

let popsicle2 // defines popsicle2 globally
const getPokemon = document.getElementById("pokemon-find") // click button
const pokeSearch = document.getElementById('pokemon-search') // search bar for dex or names
const pokeListDropdown = document.getElementById("poke-list-dropdown") // dropdown with all names
const pokeAddImg = document.getElementById("poke-img") // img in preview 
const pokeNaming = document.getElementById("poke-name") // p element in preview

let pokeList = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010") // calls pokemon api, normally the limit is 20 but with ?limit=1010, it pulls every pokemon in the api, but only gets the pokemons name and url to their other information.
    .then(response => response.json())
    .then(data => {
      return data.results    
})
    .catch((err)=>{
    console.log("error", err)
})

pokeList.map(item =>{  // creates the list of pokemon and adds all to the dropdown
    let pokeOption = document.createElement("option") 
    pokeOption.textContent = item.name
    pokeListDropdown.appendChild(pokeOption) 
})

 async function callPokemon(url, pokeName){ //takes the url, fetches the second set of data from the api because the first list only gives the name and url of the pokemon
        fetch(url)
        .then(response => response.json())
        .then(data => {  

            pokeNaming.innerText = pokeName // updates the name in the preview section
            pokeAddImg.src = data.sprites.front_default    // updates the image in the preview section
            
        return popsicle2 = {   // creates a object for second part of the final popsicle
            "name": pokeName,
            "image": data.sprites.front_default
        }
        
    })
    .catch((err)=>{
        console.log("error", err)
    })
}

getPokemon.addEventListener('click', function(){
    let foundPokemonDex = pokeList[pokeSearch.value-1] // gets pokemon by looking at index and reduces the input number by 1
    let foundPokemonName = pokeList.find(pokemon => pokemon.name === pokeSearch.value.toLowerCase()); // uses find() to find the exact pokemon and changes any value entered to lower case
    let foundPokemonList = pokeListDropdown.options[pokeListDropdown.selectedIndex].textContent // retrieves the name from the dropdown list


    console.log(foundPokemonDex)
    console.log(foundPokemonName)
    
    if(foundPokemonName||foundPokemonDex){
        callPokemon(foundPokemonDex.url, foundPokemonDex.name)  
        // if(foundPokemonDex){  // searches by index number 
        //     //let pokeName = foundPokemonDex.name
        //     callPokemon(foundPokemonDex.url, foundPokemonDex.name /*pokeName*/)  
        
        // }else if(foundPokemonName){ //searches by name
        //     //let pokeName = foundPokemonName.name
        //     callPokemon(foundPokemonName.url,foundPokemonName.name /* pokeName*/)
        
        }else if(foundPokemonList !== "Choose A Pokemon"){ // searches from dropdown menu
           let pokedata = pokeList.find(pokemon => pokemon.name === foundPokemonList)
            callPokemon(pokedata.url, pokedata.name)

        }
        else{
            alert("please enter a number from 1 to 1010 or a pokemon's name") // alert if error has occured
        }
})

/////////------Choose Joke-----///////////////////////////////////////////////////////////////////

let popsicle3 // defines popsicle3 globally 
const setupBox = document.getElementById("set-up"); // setup textbox
const punchlineBox = document.getElementById("punchline") // punchline textbox
const addJokeButton = document.getElementById("add-joke"); // add joke button

addJokeButton.addEventListener("click", function(){ // updates the preview with the setup and punchline, then creates an object that updates pop3 globally
    previewSetup.innerText = setupBox.value
    previewPunchline.innerText = punchlineBox.value

   return popsicle3 = {
        "setup": previewSetup.innerText,
        "punchline": previewPunchline.innerText,
    }

 })

let setupP = document.getElementById('setup-add') // 
let punchlineP = document.getElementById('punchline-add')

let randomJokeButton = document.getElementById("random-joke")
let saveJokeButton = document.getElementById("save-joke")

let previewSetup = document.getElementById('preview-setup')
let previewPunchline = document.getElementById('preview-punchline')


randomJokeButton.addEventListener("click", function(){ // calls the joke api, changes random joke button to New Joke, and enables the save joke button.
    getJokes()
    if(randomJokeButton.value !== "New Joke"){
        randomJokeButton.value = "New Joke"
        saveJokeButton.disabled = false;
    }
})

function getJokes() { 
    fetch("https://official-joke-api.appspot.com/jokes/random") // calls random joke api
    .then(response => response.json())
    .then(data => {
        setupP.innerText = data.setup    // enters setup line from api
        punchlineP.innerText = data.punchline  // enters punchlile from api
})
    .catch((err)=>{
    console.log("error", err)
})}

saveJokeButton.addEventListener('click', function(){ // adds a random joke to the preview when save joke is pressed
    previewSetup.textContent = setupP.textContent 
    previewPunchline.textContent = punchlineP.textContent

    popsicle3 = { // add content for popsicle 3
        "setup": setupP.textContent,
        "punchline": punchlineP.textContent,
    }

    getJokes()

    return popsicle3
})

////////------Finalize Choice-----/////////////////////////////////////////

let popsicleFinal //defines popsicleFinal globally
const popsicleButton = document.getElementById("create-popsicle"); // create popsicle button

popsicleButton.addEventListener('click', function(){ // checks if each part of the popsicle is filled out and gives the user an alert to see if they are happy with their choices. 

    if(popsicle2 === undefined){ // checks if any pokemon are chosen, makes pokemon optional 
        popsicle2 ={
            "name": 'none',
            "image": 'none'
        }
    }
    
    if(popsicle3 === undefined){ // checks if any jokes are chosen, makes joke optional 
        popsicle3 ={
            "setup": 'none',
            "punchline": 'none',
        }
    }

    if(popsicle1 === undefined){  // this makes it so that a popsicle needs to be entered
        alert("Please enter a Popsicle.")
    } else{
        let result = confirm("Are you sure you want this popsicle?") 
            if(result){

                popsicleFinal = {...popsicle1, ...popsicle2, ...popsicle3} // combines all three parts of the popsicle into one object

                console.log(popsicleFinal) // I left this in for this project because it's pretending to send information to another application that takes popsicleFinal and uses it to create the popsicle. 

                alert("You will recieve your popsicle soon!")

                return popsicleFinal 
            }
    }
})

