// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardMaker = function (arr) {

    // Create Elements
    const card = document.createElement("div") //Add class of card
    const headline = document.createElement("div") // Add headline class. Need headline text content 
    const author = document.createElement("div") //Add class of author
    const img_container = document.createElement("div") // add img-container class. Inside of author. 
    const img = document.createElement("img") // src of url authors image // arr.authorPhoto
    const span = document.createElement('span') // Add authors name. Inside author // arr.authorPhoto

    //Append childs

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(img_container)
    author.appendChild(img)
    card.appendChild(span)

    //Add Classes

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    img_container.classList.add('img-container')


    //Text Content 
    img.src = arr.authorPhoto // add arr authors image
    span.textContent = arr.authorName // Authors name arr.name
    headline.textContent = arr.headline

    return card
}

const newCards = document.querySelector('.cards-container')

const cards = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles/')
        .then(response => {

            const articles = response.data.articles
            const articleKey = Object.keys(articles)

            articleKey.forEach(arr => {

                    const myArticles = articles[arr]
                    myArticles.forEach(arr => {
                        let Articlemaker = cardMaker(arr)
                        newCards.appendChild(Articlemaker)
                    })
                })
        })
        
        .catch(error => console.error(error));
}


cards()

//Within each card you have a tab
// FOR Each topoc. run card Add a card