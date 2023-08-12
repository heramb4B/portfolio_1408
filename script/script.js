// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header);

 // Get the button element
 const scrollToTopButton = document.getElementById("scrollToTop");

 // Show the button when the user scrolls down 20px from the top of the document
 window.onscroll = function() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     scrollToTopButton.style.display = "block";
   } else {
     scrollToTopButton.style.display = "none";
   }
 };

 // Scroll to the top of the document when the button is clicked
 scrollToTopButton.addEventListener("click", function() {
   document.body.scrollTop = 0;  // For Safari
   document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
 });

 
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// added by me


const words = ["Web Developer", "Volunteer", "Aspirant"];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const index = currentIndex % words.length;
  const fullText = words[index];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
    typingSpeed = 50; // Faster erasing speed
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
    typingSpeed = 100; // Normal typing speed
  }

  document.getElementById("typingText").textContent = currentText;

  if (!isDeleting && currentText === fullText) {
    isDeleting = true;
    typingSpeed = 1500; // Delay before erasing the text
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex++;
    typingSpeed = 500; // Delay before typing the next word
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});



document.addEventListener("DOMContentLoaded", function() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});


document.addEventListener("DOMContentLoaded", function() {
  var openPopupButton = document.querySelector(".open-popup");
  var closePopupButton = document.querySelector(".close-popup");
  var popupOverlay = document.querySelector(".popup-overlay");

  openPopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "flex";
  });

  closePopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "none";
  });
});


function typeEffect(element) {
    var text = element.innerHTML; // Get the text content of the element
    element.innerHTML = ''; // Clear the element
  
    var i = 0;
    var speed = 850; // Adjust typing speed (in milliseconds)
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    element.appendChild(cursor); // Append the cursor element
  
    function type() {
      if (i < text.length) {
        if (text.charAt(i) === '<') {
          var tagEnd = text.indexOf('>', i); // Find the end of the HTML tag
          var tag = text.slice(i, tagEnd + 1); // Extract the HTML tag
          element.innerHTML += tag; // Append the HTML tag
          i = tagEnd + 1; // Move the index after the HTML tag
        } else {
          element.innerHTML += text.charAt(i); // Append the character
          i++;
        }
        setTimeout(type, speed); // Call the function recursively after a delay
      } else {
        element.removeChild(cursor); // Remove the cursor element when done
      }
    }
  
    type(); // Start the typing effect
  }
  
  // Start the typing effect when the page is loaded
  document.addEventListener('DOMContentLoaded', function() {
    var title = document.querySelector('.hero_title');
    typeEffect(title);
  });
  