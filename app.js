import RouterHandler from "./router.js";

//onhashchange detects hash in url and its changes
window.onhashchange = () => {
    setActiveLink();
}

function setActiveLink() {
    const links = document.querySelectorAll('.header-link');
    links.forEach(link => {
       const linkPath = link.getAttribute('href');
       const currentPath = window.location.hash;
       if (currentPath === linkPath) {
         link.classList.add('active');  //add active class for visbility if current and link paths match
       } else {
         link.classList.remove('active');         
       }
    });
 }

class App {
    constructor() {
        new RouterHandler(); //instantiate with 'new'
    }
}

new App();