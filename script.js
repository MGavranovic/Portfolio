console.log(1);

/////////// SELECTORS
// selecting all the elements
// Selecting navbar elements
const aboutMeNav = document.getElementById('nav-about--me');
const projectsNav = document.getElementById('nav-projects');
const contactsNav = document.getElementById('nav-contacts');
// Selecting logo
const logo = document.querySelector('.logo');
console.log(logo);

const navbar = document.querySelector('.nav-bar');
const navbarHeight = navbar.offsetHeight;
console.log(navbarHeight);
// selecting parts of the page
const aboutMe = document.querySelector('.container-about--me');
console.log(aboutMe);
const projects = document.querySelector('.projects');
console.log(projects);
const contacts = document.querySelector('.contact-info--container');
console.log(contacts);
///////////// Adding listeners

/*
I will write variables for all the positions for these
listeners to go to and add them later in place of the default functions
*/
/* WORKING WITH POSITIONS OF THE ELEMENTS */
// Testing examples with certain functions and properties
/*
console.log('Position of About Me section', aboutMe.getBoundingClientRect());
console.log('Position of Projects section', projects.scrollY);
console.log('Position of Contacts section', contacts.offsetTop);
*/
// Getting the values of the getBoundingClientRect() on navbar links/elements
const aboutMePosition = aboutMe.getBoundingClientRect().y;
console.log('aboutMePosition =', aboutMePosition);
const projectsPosition = projects.getBoundingClientRect().y;
console.log('projectsPosition =', projectsPosition);
const contactsPosition = contacts.getBoundingClientRect().y;

// More testing with all above and below examples
// will have to play around with scroll EventListener a bit more
/*
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
});
*/

// With listeners below, the windows scrolls to a dif positions sometimes
// will have to look into it more
aboutMeNav.addEventListener('click', function (e) {
  console.log(e);
  window.scrollTo(0, aboutMePosition - navbarHeight);
});

projectsNav.addEventListener('click', function (e) {
  console.log(e);
  window.scrollTo(0, projectsPosition - navbarHeight);
});

contactsNav.addEventListener('click', function (e) {
  console.log(e);
  window.scrollTo(15, contactsPosition - navbarHeight);
});

//test logo reload on click
logo.addEventListener('click', function (e) {
  window.location.reload();
});
/* test
navbar.addEventListener('click', function (e) {
  console.log(e);
});
*/
