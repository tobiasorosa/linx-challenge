"use strict"

var i = 0;

fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
.then(function(resp) {
    return resp.json();
})

.then(function(data) {
    var products = [data.products];
    console.log(data);
    if (matchMedia('only screen and (max-width: 1000px)').matches) {
        for(i; i < 4; i++){
        let card = document.createElement('div');
        card.className = "product_card";
        card.innerHTML = `<img src="${products[0].image}" alt="Card de Produto">
        <div class="card_content">
            <h3>${products[i].name}</h3>
            <p>${products[i].description}</p>
            <p>De: ${products[i].oldPrice}</p>
            <h4>Por: ${products[i].price}</h4>
            <p>ou ${products[i].installments.count}x de R$${products[i].installments.value}</p>
            <button type="button" class="btn_compra">Comprar</button>
        </div>
        
        
        `
        document.getElementById('product-container').appendChild(card);
        }






    } else {
        sdddd
    }
});
