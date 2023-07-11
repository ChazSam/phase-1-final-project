const popColor = document.getElementById('pop-color') 
const popFlavor = document.getElementById('pop-flavor') 
const popType = document.getElementById('pop-type') 
const popsicleChoice = document.getElementById('popsicle-choice') 
const underPopsicle = document.getElementById('popsicle') 
let popsicle1 

const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "translateY(-20px)"
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "translateY(0)"
  })
})


popsicleChoice.addEventListener('click', () => { 
     popsicle1 = {
        "color": popColor.value,
        "flavor": popFlavor.value,
        "type" : popType.value
    } 
    underPopsicle.innerText = `${popsicle1.color} ${popsicle1.flavor} ${popsicle1.type}` 
    return popsicle1 
})


let popsicle2 
const getPokemon = document.getElementById("pokemon-find") 
const pokeSearch = document.getElementById('pokemon-search') 
const pokeListDropdown = document.getElementById("poke-list-dropdown") 
const pokeAddImg = document.getElementById("poke-img") 
const pokeNaming = document.getElementById("poke-name") 

let pokeList = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010") 
    .then(response => response.json())
    .then(data => {
      return data.results    
})
    .catch((err)=>{
    console.log("error", err)
})

pokeList.map(item => { 
    let pokeOption = document.createElement("option") 
    pokeOption.textContent = item.name
    pokeListDropdown.appendChild(pokeOption) 
})

 async function callPokemon(url, pokeName){ 
        fetch(url)
        .then(response => response.json())
        .then(data => {  

            pokeNaming.innerText = pokeName 
            pokeAddImg.src = data.sprites.front_default    
            
        return popsicle2 = {   
            "name": pokeName,
            "image": data.sprites.front_default
        }
        
    })
    .catch((err)=>{
        console.log("error", err)
    })
}

getPokemon.addEventListener('click', () => {
    let foundPokemonDex = pokeList[pokeSearch.value-1] 
    let foundPokemonName = pokeList.find(pokemon => pokemon.name === pokeSearch.value.toLowerCase());
    let foundPokemonList = pokeListDropdown.options[pokeListDropdown.selectedIndex].textContent

        if(foundPokemonDex){  
            callPokemon(foundPokemonDex.url, foundPokemonDex.name)  
        
        }else if(foundPokemonName){ 
            callPokemon(foundPokemonName.url,foundPokemonName.name)
        
        }else if(foundPokemonList !== "Choose A Pokemon"){ 
           let pokedata = pokeList.find(pokemon => pokemon.name === foundPokemonList)
            callPokemon(pokedata.url, pokedata.name)

        }
        else{
            alert("please enter a number from 1 to 1010 or a pokemon's name") 
        }
})

let popsicle3 
const setupBox = document.getElementById("set-up"); 
const punchlineBox = document.getElementById("punchline") 
const addJokeButton = document.getElementById("add-joke"); 

addJokeButton.addEventListener("click", () =>{ 
    previewSetup.innerText = setupBox.value
    previewPunchline.innerText = punchlineBox.value

   return popsicle3 = {
        "setup": previewSetup.innerText,
        "punchline": previewPunchline.innerText,
    }

 })

const setupP = document.getElementById('setup-add') 
const punchlineP = document.getElementById('punchline-add') 

const randomJokeButton = document.getElementById("random-joke") 
const saveJokeButton = document.getElementById("save-joke") 

const previewSetup = document.getElementById('preview-setup') 
const previewPunchline = document.getElementById('preview-punchline') 


randomJokeButton.addEventListener("click", () => { 
    getJokes()
    if(randomJokeButton.value !== "New Joke"){ 
        randomJokeButton.value = "New Joke"
        saveJokeButton.disabled = false;
    }
})

function getJokes() { 
    fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then(data => {
        setupP.innerText = data.setup    
        punchlineP.innerText = data.punchline  
})
    .catch((err)=>{
    console.log("error", err)
})}

saveJokeButton.addEventListener('click', () => { 
    previewSetup.textContent = setupP.textContent 
    previewPunchline.textContent = punchlineP.textContent

    popsicle3 = { 
        "setup": setupP.textContent,
        "punchline": punchlineP.textContent,
    }

    getJokes()

    return popsicle3
})


const popsicleButton = document.getElementById("create-popsicle").addEventListener('mouseup',() => {

    if(popsicle2 === undefined){
        popsicle2 = {
            "name": 'none',
            "image": 'none'
        }
    }
    
    if(popsicle3 === undefined){ 
        popsicle3 ={
            "setup": 'none',
            "punchline": 'none',
        }
    }

    if(popsicle1 === undefined) {  
        alert("Please enter a Popsicle.")
    } else {
        let result = confirm("Are you sure you want this popsicle?") 
            if(result){

                let popsicleFinal = {...popsicle1, ...popsicle2, ...popsicle3} 
       
                alert("You will recieve your popsicle soon!")

                const configurationObject = { 
 
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    },
                    body: JSON.stringify(popsicleFinal),
                
                };

                fetch("http://localhost:3000/popsicle", configurationObject)    
                .catch((err)=>{
                console.log("error", err)
                })   
            }

    }


})