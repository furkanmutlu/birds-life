let collapsed = false;
const nav = document.querySelector('.nav');
const hamburgerMenu = document.querySelector('.hamburger-icon');

function hideElement(element) {
    element.style.display = 'none';
}

function showElement(element) {
    element.style.display = 'inherit';
}

function toggleNavVisibility() {
    if(collapsed) {
        showElement(nav);
        collapsed = !collapsed;
        return;
    }

    hideElement(nav);
    collapsed = !collapsed;
}

function handleNavOnload() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1010) {
        collapsed = true;

        hideElement(nav);
        showElement(hamburgerMenu);
        return;
    }

    showElement(nav);
    hideElement(hamburgerMenu);
}

function handleNavOnResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1010) {
        collapsed = true;

        hideElement(nav);
        showElement(hamburgerMenu);
        return;
    } 

    showElement(nav);
    hideElement(hamburgerMenu);
    collapsed = false;
}