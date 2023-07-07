/////////------Choose Popsicle-----/////////////////////////////
//assignments for each element
let popColor = document.getElementById('pop-color') // color dropdown
let popFlavor = document.getElementById('pop-flavor') // flavor dropdown
let popType = document.getElementById('pop-type') // popsicle shape dropdown
let popsicleChoice = document.getElementById('popsicle-choice') // click button 
let underPopsicle = document.getElementById('popsicle') //p tag in preview section
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
let pokeListDropdown = document.getElementById("poke-list-dropdown") // dropdown with all names
let pokeAddImg = document.getElementById("poke-img") // img in preview 
let pokeNaming = document.getElementById("poke-name") // p element in preview

let pokeList = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010") // calls pokemon api, normally the limit is 20 but with ?limit=1010 pulls every pokemon in the api, but only gets the pokemons name and url to their other information.
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
            let pokeImg = data.sprites.front_default //assigns a var with the sprite pic of the pokemon

            popsicle2 = {   // creates a object for second part of the final popsicle
                "name": pokeName,
                "image": pokeImg
            }
            
            pokeNaming.innerText = pokeName // updates the name in the preview section
            pokeAddImg.src = pokeImg    // updates the image in the preview section
            
        return pokeImg, popsicle2
    })
    .catch((err)=>{
        console.log("error", err)
    })
}


getPokemon.addEventListener('click', function(){
    let foundPokemonDex = pokeList[pokeSearch.value-1] // gets pokemon by looking at index and reduces the input number by 1
    let foundPokemonName = pokeList.find(pokemon => pokemon.name === pokeSearch.value.toLowerCase()); //finds exact pokemon and changes any value entered to lower case
    let foundPokemonList = pokeListDropdown.options[pokeListDropdown.selectedIndex].textContent // retrieves the name from the dropdown list

        if(foundPokemonDex){  // searches by index number 
            let pokeName = foundPokemonDex.name
            callPokemon(foundPokemonDex.url, pokeName)  
        
        }else if(foundPokemonName){ //searches by name
            let pokeName = foundPokemonName.name
            callPokemon(foundPokemonName.url, pokeName)
        
        }else if(foundPokemonList !== "Choose A Pokemon"){ // searches from dropdown menu
           let pokedata = pokeList.find(pokemon => pokemon.name === foundPokemonList)
            callPokemon(pokedata.url, pokedata.name)

           // console.log(pokedata)
        }
        else{
            //console.log("nope")
            alert("please enter a number from 1 to 1010 or a pokemon's name") // alert if error has occured
        }
})


/////////------Choose Joke-----///////////////////////////////////////////////////////////////////

let popsicle3 // defines popsicle3 globally 

let setupBox = document.getElementById("set-up");
let punchlineBox = document.getElementById("punchline")
let addJokeButton = document.getElementById("add-joke");

 addJokeButton.addEventListener("click", function(){
    previewSetup.innerText = setupBox.value
    previewPunchline.innerText = punchlineBox.value


    popsicle3 = {
        "setup": previewSetup.innerText,
        "punchline": previewPunchline.innerText,
    }

    console.log(popsicle3)
    return popsicle3
 })


let setupP = document.getElementById('setup-add') // assignments for each element
let punchlineP = document.getElementById('punchline-add')

let randomJokeButton = document.getElementById("random-joke");
let saveJokeButton = document.getElementById("save-joke")

let previewSetup = document.getElementById('preview-setup')
let previewPunchline = document.getElementById('preview-punchline')


randomJokeButton.addEventListener("click", function(){
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

saveJokeButton.addEventListener('click', function(){ // adds random joke to 
    previewSetup.textContent = setupP.textContent 
    previewPunchline.textContent = punchlineP.textContent

    popsicle3 = { // add content for popsicle 3
        "setup": setupP.textContent,
        "punchline": punchlineP.textContent,
    }

        console.log(popsicle3)

    getJokes()
    return popsicle3
})


////////------Finalize Choice-----/////////////////////////////////////////

let popsicleFinal //defines popsicleFinal globally
let popsicleButton = document.getElementById("create-popsicle");

popsicleButton.addEventListener('click', function(){

    if(popsicle2 === undefined){ // makes pokemon optional 
        popsicle2 ={
            "name": 'none',
            "image": 'none'
        }
    }
    
    if(popsicle3 === undefined){ // makes joke optional 
        popsicle3 ={
            "setup": 'none',
            "punchline": 'none',
        }
    }
    // (console.log(popsicle3))
    if(popsicle1 === undefined){  // this makes it so that a popsicle needs to be entered
        alert("Please enter a Popsicle.")
    } else{
        let result = confirm("Are you sure you want this popsicle?") 
            if(result){

                //console.log(popsicle3)
                popsicleFinal = {...popsicle1, ...popsicle2, ...popsicle3} // combines all three parts of the popsicle into one object
                console.log(popsicleFinal)

                alert("You will recieve your popsicle soon!")

                return popsicleFinal 
            }
    }
})

