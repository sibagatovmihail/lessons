const htmlElement = document.documentElement;

window.addEventListener('click', windowClick)

function windowClick(e) {
    const targetElement = e.target;

    if(targetElement.closest(".header__icon")){
        htmlElement.classList.toggle("menu-open")
    }
}