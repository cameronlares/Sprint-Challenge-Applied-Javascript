// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const tabCreator = function(arr){
    const tab = document.createElement("div") // New Element
    tab.classList.add("tab") // New Class
    tab.textContent = arr // Text Content

    return tab
}

const newTab = document.querySelector("div.topics ")


const tabs = () => {

    
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
  
    .then(response =>{
        const topic = response.data.topics

        topic.forEach(arr =>{
      newTab.appendChild(tabCreator(arr))
        })
       
      
       
       
        //console.log(topic.topics)
         //Might need a function here

    })
    .catch(error => console.error(error));
}


tabs()




// const fetchUsers = () => {

//     followersArray.forEach(arr => {
  
//         axios.get(`https://api.github.com/users/${arr}`)
//           .then(response => {
//             const users = response.data;
//             myCard.appendChild(cardCreator(users))
//             //push axios. replace followersarray with arr in axios 
//           })
//       })
//       .catch(error => console.error(error));
//   }
  
//   fetchUsers()