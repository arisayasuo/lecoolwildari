
///////////////////////////////////////////////////
//Switch Nav/Hamburger --- 
///////////////////////////////////////////////////
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

function resizeWindow(event){
    const width = window.innerWidth;
    //console.log(width);

    if(width < 480){
        nav.style.display = "none";
        hamburger.style.display = "block";
    } else{
        nav.style.display = "block";
        hamburger.style.display = "none";
    }
}

window.addEventListener('resize', resizeWindow);

///////////////////////////////////////////////////
//Control hamburger --- HW: show mobile ver. of nav
///////////////////////////////////////////////////
hamburger.addEventListener('click',showMobileNav);

function showMobileNav(event){
    console.log("mobile ver nav is under construction");
}


