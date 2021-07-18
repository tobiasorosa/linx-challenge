"use strict"

// object formatting to Brazilian Currency 
var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Fetch Endpoint API for the first time on document load 
fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
.then(function(resp) {
    return resp.json();
})
.then(function(data) {

    //  Store nextPage attribute to a variable
    var jsonNextPage = data.nextPage;

    //  Separate array of product objects
    var products = data.products;

    //  Initialize counter
    var i = 0;

    //  Verify if is mobile
    if (matchMedia('only screen and (max-width: 1000px)').matches) {
        for(i; i < 4; i++){
            //  Create 4 cards
            createDiv(products, i);
        }
        document.getElementById('button-more').addEventListener('click', () => {
            //  If button VIEW MORE clicked, create more 4 cards
            if(i == 4) {
                for(i; i < 8; i++){
                    createDiv(products, i);
                }

                //  After counter reaches 8, restart counter to 0
                i = 0;
            } else if(i == 0) {

                //  Counter returned 0 => Fetch next JSON list
                fetch('https://' + jsonNextPage) //use var nextPage
                .then(function(resp) {
                    return resp.json();
                })
                .then(function(data) {

                    //Store the updated nextPage to the variable
                    jsonNextPage = data.nextPage;
                    products = data.products;
                    for(i; i < 4; i++){
                        createDiv(products, i);
                        
                    }
                })
            }
        })
        
        //  If is not Mobile (is Desktop)
    } else {
        for(let i = 0; i < 8; i++){
            //  Create 8 cards
            createDiv(products, i);
        }
        
        document.getElementById('button-more').addEventListener('click', () => {
            //  If button VIEW MORE clicked, fetch next JSON list
            fetch('https://' + jsonNextPage)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
                jsonNextPage = data.nextPage; //Same as before
                products = data.products;            
                for(let i = 0; i < 8; i++){

                    //  Create 8 more cards
                    createDiv(products, i);
                }
            })
        })
    }
})

/**
 * Create product cards with JSON data
 * @param {object} products Object separated from array of JSON objects
 * @param {number} i The counter initialized in beginning of fetch, is used as index for products
 */
function createDiv(products, i) {
    //  Create a card div with class
    let card = document.createElement('div');
    card.className = "product_card";

    //  Insert HTML elements such as image, product name, prices and a buy button
    card.innerHTML = `
    <img src="${products[i].image}" alt="Card de Produto">
    <div class="card_content">
    <h3>${products[i].name}</h3>
    <p>${products[i].description}</p>
    <p>De: ${formatter.format(products[i].oldPrice)}</p>
    <h4>Por: ${formatter.format(products[i].price)}</h4>
    <p>ou ${products[i].installments.count}x de ${formatter.format(products[i].installments.value)}</p>
    <button type="button" class="btn_compra">Comprar</button>
    </div>
    `

    //  Attach card div to product list
    document.getElementById('product-container').appendChild(card);
}