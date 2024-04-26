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









 const firstname = document.getElementById("Firstname");
 const email = document.getElementById("email");
 const conformemail = document.getElementById("email2");
 const Contact  = document.getElementById("contact");
 const Address  = document.getElementById("address");
 let flag = 1;





 function checkfield()
 {
   if (firstname.value =="")
   {
   document.getElementById("error1").innerHTML ="*First name require";
    flag = 0;

   }else
   {
    document.getElementById("error1").innerHTML ="";
    flag = 1;
   } 

   if(email.value=="")
   {
    document.getElementById("emailerror").innerHTML="*Email Address Require.";
    flag = 0;

   } else
   {
    document.getElementById("emailerror").innerHTML ="";
     flag = 1;
   }

    if(conformemail.value=="")
    {
    document.getElementById("error2").innerHTML="*please conform your email.";
    flag = 0;
    } 
     else
     {
      document.getElementById("error2").innerHTML="";
       flag = 1;
     }

    if(Contact.value=="")
    {
      document.getElementById("error3").innerHTML="*please enter your contact number.";
       flag = 0;
      } 
     else
    {
       document.getElementById("error3").innerHTML="";
        flag = 1;
     }
    if (Address.value=="")
     {
        document.getElementById("Addresserror").innerHTML="*this field is empty.";
        flag = 0;
      }  
      else
      {
        document.getElementById("Addresserror").innerHTML="";
         flag = 1;
      }


      if(flag)
      {
        return true;
      }
       else
       {
        return false;
      }
 }