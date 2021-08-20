/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const noOfSections = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Return index of active of section of distance from top between -300 and 300
function findActive(dists){
	for (let i = 0; i < noOfSections; i++){
		if (dists[i] <= 300 && dists[i] >= -300){
			let activeIndex = i;
			return activeIndex;
		}	
	}
} 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuild(){

	// Fragment used to reduce reflow and repaint times for better performance
	let fragment = document.createDocumentFragment();

	// Used to index link id
	let counter = 0;
	
	// Create link for each section and add it to fragment
	for (section of sections){
		counter++;
		let navbarItem = document.createElement('li');
		navbarItem.setAttribute('class','menu__link');
		navbarItem.setAttribute('id',`link${counter}`);
		navbarItem.textContent= section.getAttribute('data-nav');
		fragment.appendChild(navbarItem);
	}

	navbarList.appendChild(fragment);
}


// Add class 'active' to section and its link when near top of viewport
function activeSection(){

	let distFromTop = [];

	// Collecting distances between sections and the top of the viewport
	for (section of sections){
		distFromTop.push(section.getBoundingClientRect().top);
	}

	// Finding closest section to the top of the viewport
	activeIndex = findActive(distFromTop);

	// Removing active class from inactive sections if applied and applying it to the current active section if not applied
	for (let indexSelection = 0; indexSelection < noOfSections; indexSelection++){

		// Skip indexSelection when out of index
		if (indexSelection == -1 || indexSelection == noOfSections){
			continue;
		}
		
		// Set active section and link and unset other ones
		let sectionSelection = document.querySelector(`#section${indexSelection+1}`);
		let linkSelection = document.querySelector(`#link${indexSelection+1}`);
		if (sectionSelection.classList.contains('your-active-class') && indexSelection != activeIndex){
			sectionSelection.classList.remove('your-active-class');
			linkSelection.classList.remove('your-active-link');
		} else if (!sectionSelection.classList.contains('your-active-class') && indexSelection == activeIndex){
			sectionSelection.classList.add('your-active-class');
			linkSelection.classList.add('your-active-link');
		}
	}
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event){

	let link = event.target.getAttribute('id');

	// Corresponding links and sections have a common index-like number at the end of their ids
	let sectionNum = link[4];
	let target = document.querySelector(`#section${sectionNum}`);

	target.scrollIntoView({behavior: 'smooth'});
}

// Hide navigation when not in use
function peek(){

	navbarList.classList.add('your-active-nav');
	let timeout = setTimeout(function hide(){
		navbarList.classList.remove('your-active-nav');
	},3000);

	// Reset timeouts due to frequent sampling of scroll event
	document.addEventListener('scroll',function reset(){
		clearTimeout(timeout);
		timeout;
	});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded',navBuild);

// Scroll to section on link click
navbarList.addEventListener('click',scrollToSection);

// Set sections as active
document.addEventListener('DOMContentLoaded',activeSection);
document.addEventListener('scroll',activeSection);

// Display navigation menu after scroll
document.addEventListener('DOMContentLoaded',peek);
document.addEventListener('scroll',peek);
