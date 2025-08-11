
function navToggle(){

    window.addEventListener('load', () => {
        
        if(!document.querySelector('.navbar-logo')) return ;

        const navLogo = document.querySelector('.navbar-logo');

        navLogo.addEventListener('click', () => {
            const links = document.querySelector('.navbar-links');
            links.classList.toggle('active');
        })

    })
} 


if(window.innerWidth < 768){
    navToggle();
}