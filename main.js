// Create an object representing your breakfast.
// Write a function that will accept your breakfast object and return a component. 
// Display the component on the DOM along with your name. 
// You will need index.html and main.js.

const breakFast = [ 
    {
    name: "Onion-Bagel",
    type: "food",
    topping: "herb and garden cream cheese",
},
{
    name: "Green Matcha Tea",
    type: "Beverage",
    topping: "Added honey",
},
]

const breakFastFunction = (item) => {
    return`
        <div>
            <h2>${item.name}</h2>
            <p>${item.type}</p>
            <p>${item.topping}</p>
        </div>
       `
}
const breakfastContainer = document.querySelector(".container");


for (let i = 0; i < breakFast.length; i++){
    console.log("loop of the array", i , breakFast[i]);
    breakfastContainer.innerHTML += breakFastFunction(breakFast[i]);  
}