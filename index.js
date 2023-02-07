//Fade 

const fadeEl = document.querySelector('.fade');
let hasScrolled = false;

window.addEventListener("scroll", () =>{

    if(!hasScrolled){
        fadeEl.style.opacity = '0.2';
        hasScrolled = true;
    }
});


const filtersEl = document.querySelector('.filters');
const projectEl1 = document.querySelector('.project:nth-child(1)');
const projectEl2 = document.querySelector('.project:nth-child(2)');
const projectEl3 = document.querySelector('.project:nth-child(3)');
const projectEl4 = document.querySelector('.project:nth-child(4)');
const projectEl5 = document.querySelector('.project:nth-child(5)');
const projectEl6 = document.querySelector('.project:nth-child(6)');
const htmlEl = document.querySelector('html')


filtersEl.addEventListener("click", (event) =>{

    //remove fade 
    fadeEl.style.opacity = '0';

    // make clicked button active 

    document.querySelector('.filter-btn--active').classList.remove('filter-btn--active')

    event.target.classList.add('filter-btn--active')

    // change image opacities 

    htmlEl.style.setProperty("--default-opacity", "0.4");
    htmlEl.style.setProperty("--hover-opacity", "0.3");

    // reorganize grid 

    const filterText = event.target.textContent;


    if ( filterText === 'Front-End'){

        projectEl1.style.opacity = '0';
        projectEl1.style.transform = 'scale(0)';

        projectEl2.style.opacity = '0';
        projectEl2.style.transform = 'scale(0)';

        projectEl5.style.opacity = '0';
        projectEl5.style.transform = 'scale(0)';

        projectEl6.style.opacity = '0';
        projectEl6.style.transform = 'scale(0)';

    
        projectEl3.style.transform = 'translateX(-650px)';
        projectEl3.style.opacity = '1';
        projectEl4.style.transform = 'translate(325px, -550px)'
        projectEl4.style.opacity = '1';

       
    } else if ( filterText === 'Back-End'){

        projectEl1.style.opacity = '0';
        projectEl1.style.transform = 'scale(0)';

        projectEl2.style.opacity = '0';
        projectEl2.style.transform = 'scale(0)';

        projectEl3.style.opacity = '0';
        projectEl3.style.transform = 'scale(0)';

        projectEl4.style.opacity = '0';
        projectEl4.style.transform = 'scale(0)';

        projectEl5.style.transform = 'translate(-325px, -360px)';
        projectEl5.style.opacity = '1';
        projectEl6.style.transform = 'translate(-325px, -565px)';
        projectEl6.style.opacity = '1';


    } else if ( filterText === 'Full-Stack'){

        projectEl3.style.opacity = '0';
        projectEl3.style.transform = 'scale(0)';

        projectEl4.style.opacity = '0';
        projectEl4.style.transform = 'scale(0)';

        projectEl5.style.opacity = '0';
        projectEl5.style.transform = 'scale(0)';

        projectEl6.style.opacity = '0';
        projectEl6.style.transform = 'scale(0)';

        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';

        projectEl2.style.opacity = '1';
        projectEl2.style.transform = 'scale(1)';

        

    }else {

        projectEl1.style.opacity = '1';
        projectEl1.style.transform = 'scale(1)';

        projectEl2.style.opacity = '1';
        projectEl2.style.transform = 'scale(1)';

        projectEl3.style.opacity = '1';
        projectEl3.style.transform = 'scale(1)';

        projectEl4.style.opacity = '1';
        projectEl4.style.transform = 'scale(1)';

        projectEl5.style.opacity = '1';
        projectEl5.style.transform = 'scale(1)';

        projectEl6.style.opacity = '1';
        projectEl6.style.transform = 'scale(1)';

    }
});