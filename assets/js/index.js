// Listen to window resize
window.addEventListener('resize', resize);
let mobileWindow = 0;

/**
 * If viewport is Mobile, newsletter container is collapsible, if is not => collapsible becomes invisible
 * If viewport is Mobile => mobileWindow = 1
 * ----------------------------------------------------------------
 * There is some bug with the resize though, sometimes it takes to resize even one px more for the collapsible to work
 */
function resize() {

    if(matchMedia('only screen and (max-width: 1000px)').matches){ mobileWindow = 1}
    if(matchMedia('only screen and (min-width: 1001px)').matches){ mobileWindow = 0}
    if (mobileWindow === 1) {
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