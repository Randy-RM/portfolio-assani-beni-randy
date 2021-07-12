let slideTop = {
    duration: 2000,
    origin: 'top',
    distance: '50px'
};

let slideDown = {
    duration: 2000,
    origin: 'bottom',
    viewFactor: 0.3,
    distance: '50px'
};

let slideLeft = {
    duration: 2000,
    origin: 'left',
    distance: '6px'
};

let scrollSlideLeft = {
    duration: 2000,
    origin: 'left',
    distance: '6px',
    viewFactor: 0.5
};

let scrollSlideRight = {
    duration: 2000,
    origin: 'right',
    distance: '6px',
    viewFactor: 0.5
};

ScrollReveal().reveal('#navbar', slideTop);
ScrollReveal().reveal('#computerAnimation', slideTop);
ScrollReveal().reveal('#typing', slideLeft);

ScrollReveal().reveal('#aboutMe', scrollSlideRight);
ScrollReveal().reveal('#blocProfilPicture', scrollSlideLeft);

ScrollReveal().reveal('#services', slideDown);

ScrollReveal().reveal('#technicalSkills', slideDown);
ScrollReveal().reveal('#graphicDesign', slideTop);
ScrollReveal().reveal('#graphicDesignTools', slideTop);

ScrollReveal().reveal('#languages', slideTop);

ScrollReveal().reveal('#footer', slideDown);