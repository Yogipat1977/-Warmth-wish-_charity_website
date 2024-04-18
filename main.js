/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{

        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
    
 }
 toggleSearch('search-bar', 'Search-btn');


window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar()
 {
  if (window.pageYOffset >= sticky)
   {
    navbar.classList.add("fixed");
  } else 
  {
    navbar.classList.remove("fixed");
  }
}

 document.addEventListener('DOMContentLoaded', function()
{
  var videoList =['video 1.mp4','video 2.mp4','video3.mp4','video 4.mp4'];
  var currentVideo =0;
  var videoElement = document.getElementById('video');
   function changeVideo() 
   {
      currentVideo = ( currentVideo + 1)% videoList.length;
      videoElement.style.opacity = '0.2'; 
      setTimeout(function() 
      {
          videoElement.src = videoList[currentVideo];
          videoElement.style.opacity = '1'; 
      }, 1000)
    }
    setInterval(changeVideo, 5000);
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


// Add scroll event listener to the window
window.addEventListener('scroll', function() 
{
  var navbar = document.getElementById('navbar');
  
  // Check if the navbar touches the top of the window
  if (window.scrollY > 159) 
  {
      navbar.classList.add('blur'); // Add blur class to navbar
  } else
   {
      navbar.classList.remove('blur'); // Remove blur class from navbar
  }
});

			function ClickMessage()
			{
 			alert("You have successfully submitted your");
		 	}


