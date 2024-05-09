/*=============== SEARCH BAR JS ===============*/

// Function to toggle the visibility of a search bar
// Parameters: 
// - search: The ID of the search bar element.
// - button: The ID of the button element that will toggle the search bar visibility.
const toggleSearch = (search, button) => {
  // Get the search bar element by its ID
  const searchBar = document.getElementById(search);
  // Get the button element by its ID
  const searchButton = document.getElementById(button);

  // Add a click event listener to the button
  searchButton.addEventListener('click', () => {
      // Toggle the 'show-search' class on the search bar element
      // This class controls the visibility of the search bar
      searchBar.classList.toggle('show-search');
  });
}

// Call the function with the IDs of the search bar and button
// This will enable the search bar to be toggled by clicking the button
toggleSearch('search-bar', 'Search-btn');




// Assign the function `stickyNavbar` as a callback to the `onscroll` event of the `window`
// This means the function will be called every time the user scrolls on the page
window.onscroll = function() { stickyNavbar(); };

// Get the navbar element from the DOM using its ID
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar element
// This is the point at which the navbar becomes sticky
var sticky = navbar.offsetTop;

// Define the function `stickyNavbar` that will be executed when the user scrolls
function stickyNavbar() {
    // Check if the current page offset (scroll position) is greater than or equal to the sticky position
    if (window.pageYOffset >= sticky) {
        // If the user has scrolled past the sticky point, add the "fixed" class to the navbar
        // This class can be used to make the navbar fixed at the top of the window
        navbar.classList.add("fixed");
    } else {
        // If the user has not scrolled past the sticky point, remove the "fixed" class from the navbar
        // This will revert the navbar back to its original position in the document flow
        navbar.classList.remove("fixed");
    }
}





// Add a scroll event listener to the window
// The function will be called every time the user scrolls on the page
window.addEventListener('scroll', function() {
  // Get the navigation bar (navbar) element by its ID
  var navbar = document.getElementById('navbar');
  
  // Check if the page has been scrolled more than 159 pixels vertically (scrollY)
  // If the user has scrolled past 159 pixels, the navbar will touch the top of the window
  if (window.scrollY > 159) {
      // Add the 'blur' class to the navbar
      // This class can be used to apply a blur effect to the navbar in your CSS
      navbar.classList.add('blur');
  } else {
      // If the page has been scrolled less than or equal to 159 pixels vertically
      // Remove the 'blur' class from the navbar
      navbar.classList.remove('blur');
  }
});






// Select all div elements
let divs = document.querySelectorAll('div');

// Define options for the Intersection Observer
let options = {
  rootMargin: '-150px 0px', // Adjust the root margin to trigger the animation earlier or later
};

// Create a new Intersection Observer
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Check if the div is intersecting with the viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('Show-Animation');
    } else {
      entry.target.classList.remove('Show-Animation');
    }
  });
}, options);

// Observe each div
divs.forEach(div => {
  observer.observe(div);
});






// Get elements from the DOM by their IDs
const firstname = document.getElementById("Firstname");
const email = document.getElementById("email");
const conformemail = document.getElementById("email2");
const Contact = document.getElementById("contact");
const Address = document.getElementById("address");

// Initialize a flag variable as 1, representing a valid state
let flag = 1;

// Define the `checkfield()` function to validate form fields
function checkfield() {
    // Validate the first name field
    if (firstname.value === "") {
        // Display an error message if the first name field is empty
        document.getElementById("error1").innerHTML = "*First name required";
        flag = 0;
    } else {
        // Clear the error message if the field is not empty
        document.getElementById("error1").innerHTML = "";
        flag = 1;
    }

    // Validate the email field
    if (email.value === "") {
        // Display an error message if the email field is empty
        document.getElementById("emailerror").innerHTML = "*Email address required.";
        flag = 0;
    } else {
        // Clear the error message if the field is not empty
        document.getElementById("emailerror").innerHTML = "";
        flag = 1;
    }

    // Validate the confirm email field
    if (conformemail.value === "") {
        // Display an error message if the confirm email field is empty
        document.getElementById("error2").innerHTML = "*Please confirm your email.";
        flag = 0;
    } else {
        // Clear the error message if the field is not empty
        document.getElementById("error2").innerHTML = "";
        flag = 1;
    }

    // Validate the contact field
    if (Contact.value === "") {
        // Display an error message if the contact field is empty
        document.getElementById("error3").innerHTML = "*Please enter your contact number.";
        flag = 0;
    } else {
        // Clear the error message if the field is not empty
        document.getElementById("error3").innerHTML = "";
        flag = 1;
    }

    // Validate the address field
    if (Address.value === "") {
        // Display an error message if the address field is empty
        document.getElementById("Addresserror").innerHTML = "*This field is empty.";
        flag = 0;
    } else {
        // Clear the error message if the field is not empty
        document.getElementById("Addresserror").innerHTML = "";
        flag = 1;
    }

    // Return true if the flag is set to 1 (all fields are filled in correctly)
    // Otherwise, return false (some fields are missing)
    if (flag) {
        return true;
    } else {
        return false;
    }
}
