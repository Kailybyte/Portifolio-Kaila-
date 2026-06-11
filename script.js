function adjustMenu() {
    var navMenu = document.getElementById("NavMenu");
    navMenu.classList.toggle("active");
}

document.querySelector(".nav-menu-btn").addEventListener("click", adjustMenu);


window.onscroll = function() {
    headerShadow();
};

function headerShadow() {
    const navHeader = document.getElementById("header");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.2)";
        navHeader.style.height = '70px';
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = '90px';
    }
}


var typingEffect = new Typed(".Typted-Text",{
    strings : ["Programmer", "Tech-Support"],
    loop: true,
    typeSpeed : 100,
    backspeed : 80,
    backDelay : 2000
})


const scrollNav = ScrollReveal({
    origin: 'top',
    distance: '80px',
    reset: true
})

scrollNav.reveal('.Home-Program-Design') 
scrollNav.reveal('.Home-Text-Info'); 
scrollNav.reveal('.Home-Text-btn');
scrollNav.reveal('.Social-Media-Icons');
scrollNav.reveal('.Home-Headshot-image');


scrollNav.reveal('.project-box',{interval: 200})

scrollNav.reveal('.Top-header',{interval: 200})

scrollNav.reveal('.about-Info',{interval:200})

scrollNav.reveal('.Skills-Box',{interval:200})


scrollNav.reveal('.top-footer',{interval:200})
scrollNav.reveal('.middle-footer',{interval:200})
scrollNav.reveal('.footer-social-icons',{interval:200})
scrollNav.reveal('.bottom-footer',{interval:200})

