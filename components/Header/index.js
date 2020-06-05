// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container




let headerMaker = function() {

const header = document.createElement('div') // class header
const date = document.createElement('span')   // class of date. Text content of SMARCH 28, 2019<
const h1 = document.createElement('h1')// Lambda Times Text content 
const temp = document.createElement('span') // span class temp. Text content 98°

header.classList.add("header")
date.classList.add('date')
temp.classList.add('temp')

//Append to DOM
header.appendChild(date)
header.appendChild(h1)
header.appendChild(temp)

//Text Content

date.textContent = "SMARCH 28, 2019";
h1.textContent= "Lambda Times";
temp.textContent= "98°";

return header

}

const mainHeader = document.querySelector('div.header-container')

mainHeader.appendChild(headerMaker())