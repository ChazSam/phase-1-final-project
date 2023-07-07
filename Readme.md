Make your own popsicle!
Sponsered by Pokemon...Don't tell Nintendo.

This project allows users to create their own popsicle. First, they get to choose the color, flavor and type of popsicle that they want. After, they can choose to have a picture of their favorite pokemon put onto it. In addition, they have a choice of adding a joke too, either a random joke or one that they can write themselves. Once they have made their selection, it will be sent off to the popsicle factory to be made.

The first part of this project is creating the popsicle. There are three dropdowns with different colors, flavors, and types of popsicle. The user can choose anything from a green, vanilla, thin popsicle to a orange, orange, freeze pop, whatever the user wants. Once the selection is made, the create button will make a object with the selections and will return it as a global variable. 

The next two parts are optional if the user would like to add a pokemon or a joke to their popsicle. There are three ways to find the pokemon, two in the search bar and one in the dropdown. The dropdown has all 1010 pokemon in the pokemon api. The list is in original pokedex order but clicking the dropdown and typing the name int should go right to that pokemon. The search bar is the other way to find pokemon. The search bar will override anything that is within the dropdown menu so make sure that if the dropdown is being used not to fill the search bar with anything. The search bar can find pokemon through their pokedex number or by their name. If the name or number do not exist in the list, an alert will display to change the selection. When the user picks what they want and clicks Get Pokemon, it will send an object with the name and picture pulled from the api. 

If nothing from the last paragraph makes sense, here is a link of the pokedex with all the Pokemon in it - https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number

The last selection is for optional jokes to add to the popsicle stick or wrapper. The first part is to enter a setup and a punchline to a joke. When it is filled out, click add joke to add it to the list. If the user doesn't want to come up with their own joke, they can pull a random one from the random joke api.
If they like the joke, they can add it by clicking save joke and it will be entered into the preview. The program then sends the third part of the popsicle back to the global variable with the setup and punchline of the joke. 

Once each part is selected, it will show at the bottom of the screen with a preview. Finally the create popsicle will ask the user if they are fine with their selection and if they are, it will combine each three parts of the popsicle and return it as one object. 


Popsicle pics -
https://t4.ftcdn.net/jpg/04/79/03/87/360_F_479038737_60GK1bwdVHruGqCDqlgGdchP4YD3p7oQ.jpg

https://upload.wikimedia.org/wikipedia/commons/3/3f/Fla_Vor_Ice.jpg

https://media.istockphoto.com/id/155379340/photo/popsicles-in-rainbow-colors.jpg?b=1&s=612x612&w=0&k=20&c=a8lQDV36nw_e0J3JY8tSzFiX3XjS3plgntNwqxJn7Q4=

PokeApi - https://pokeapi.co/

Official Joke API - https://github.com/15Dkatz/official_joke_api

Background - https://twitter.com/anemielle/status/1148276107671724033