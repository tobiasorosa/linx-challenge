//  Create 2 cards with JSON Data
function createCards() {

    //  Format for currency
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    
    //  Fetch JSON Data
    fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        //  Separate product object from JSON objects
        var products = data.products;

        //  Create 2 cards
        for(let i = 0; i < 2; i++){
            let card = document.createElement('div');

            // Set class for the cards
            card.className = "product_card";

            // Insert HTML to the cards
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

            //  Attach card inside block of products
            document.querySelector('.products').appendChild(card);
        }
    })
}

//  Call the function
createCards();