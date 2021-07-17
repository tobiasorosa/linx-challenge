document.addEventListener('DOMContentLoaded', init)

function init() {
    let query = window.matchMedia('(max-width: 1000px)');

    if (query.matches) {
        document.getElementById('collapse').setAttribute("href","#newsletter-container");
    }
}