

window.addEventListener('resize', resize);

function resize() {

    if (matchMedia('only screen and (max-width: 1000px)').matches) {
        document.querySelectorAll('.collapse').forEach(button => {
            button.addEventListener('click', () => {
                const collapseContent = button.nextElementSibling;
    
                button.classList.toggle('collapse-active');
    
                if (button.classList.contains('collapse-active')) {
                    collapseContent.style.maxHeight = collapseContent.scrollHeight + 'px';
                } else {
                    collapseContent.style.maxHeight = 0;
                }
            })
        })
    }
}