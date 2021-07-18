"use strict"

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

fetch("http://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
.then(function(resp) {
    return resp.json();
})
.then(function(data) {
    var jsonNextPage = data.nextPage;
    var products = data.products;
    console.log(products);
    console.log(data);
    var i = 0;
    if (matchMedia('only screen and (max-width: 1000px)').matches) {
        for(i; i < 4; i++){
        let card = document.createElement('div');
        card.className = "product_card";
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
        document.getElementById('product-container').appendChild(card);
        }
        document.getElementById('button-more').addEventListener('click', () => {
            if(i == 4) {
                for(i; i < 8; i++){
                    let card = document.createElement('div');
                    card.className = "product_card";
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
                    document.getElementById('product-container').appendChild(card);
                    }
                    i = 0;
            } else if(i == 0) {
                
                fetch('http://' + jsonNextPage)
                .then(function(resp) {
                        return resp.json();
                    })
                .then(function(data) {
                    jsonNextPage = data.nextPage;
                    products = data.products;
                for(i; i < 4; i++){
                    let card = document.createElement('div');
                    card.className = "product_card";
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
                    document.getElementById('product-container').appendChild(card);
                }
            })
        }
    })

    } else {
        for(let i = 0; i < 8; i++){
            let card = document.createElement('div');
            card.className = "product_card";
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
            document.getElementById('product-container').appendChild(card);
        }
        
        document.getElementById('button-more').addEventListener('click', () => {
            fetch('http://' + jsonNextPage)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
                jsonNextPage = data.nextPage;
                products = data.products;            
                for(let i = 0; i < 8; i++){
                let card = document.createElement('div');
                card.className = "product_card";
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
                document.getElementById('product-container').appendChild(card);
                }
            })
        })
    }
})
