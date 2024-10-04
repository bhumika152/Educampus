document.addEventListener('DOMContentLoaded', () => {
  const chatboxToggle = document.getElementById('chatbox-toggle');
  const openChatbox = document.getElementById('open-chatbox');
  const chatbox = document.querySelector('.chatbox');
  const chatInput = document.getElementById('chat-input');
  const sendMessage = document.getElementById('send-message');
  const messages = document.querySelector('.messages');
  const suggestionButtons = document.querySelectorAll('.suggestion');
  const refreshChat = document.getElementById('refresh-chat');

  document.getElementById('course-list').addEventListener('change', function() {
    let selectedCourse = this.value;
    if (selectedCourse) {
        window.location.href = selectedCourse;
    }
});
  // Predefined responses
  const responses = {
    'How can I create an account?': 'To create an account, click on the Sign-in button at the top right corner and sign in using your email. A link will be sent to your email. Follow the link to complete the sign-in process.',
    'What are your operating hours?': 'Our operating hours are Monday to Friday, 9 AM to 6 PM.',
    'Do you offer student discounts?': 'Yes, we offer a 10% discount for students. Please contact our support for more details.'
  };

  // Toggle chatbox visibility
  chatboxToggle.addEventListener('click', () => {
    chatbox.style.display = 'none';
  });

  // Open chatbox
  openChatbox.addEventListener('click', () => {
    chatbox.style.display = 'block';
  });

  // Handle suggestion button clicks
  suggestionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const message = button.textContent;
      addMessage(message, 'user');
      addMessage(responses[message] || 'We will connect you with a partner shortly.', 'bot');
    });
  });

  // Send message
  sendMessage.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, 'user');
      chatInput.value = '';
      messages.scrollTop = messages.scrollHeight;
      setTimeout(() => {
        addMessage('We will connect you with a partner shortly.', 'bot');
      }, 500);
    }
  });

  // Refresh chat
  refreshChat.addEventListener('click', () => {
    messages.innerHTML = '';
  });

  // Function to add a message
  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
  }
});

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');



  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}
// login end

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends



$(document).ready(function(){
  $(".banner").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000, // Slide change interval in milliseconds
      autoplayHoverPause: true,
      dots: true, // Show navigation dots
      nav: false // Hide navigation arrows
  });
});
//mission and vision
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
          const accordionContent = this.nextElementSibling;
          const isOpen = accordionContent.style.display === 'block';

          // Close all accordion items
          document.querySelectorAll('.accordion-content').forEach(content => {
              content.style.display = 'none';
          });

          // Open the clicked accordion item if it was not already open
          if (!isOpen) {
              accordionContent.style.display = 'block';
          }
      });
  });
});
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  const query = document.getElementById('search-query').value.trim().toLowerCase();

  // Define redirect mapping
  const redirectMapping = {
      'java': 'java.html',
      'python': 'Python.html',
      'javascript': 'course-details.html',
      'c++': 'Cpp.html',
      'php':'Php.html',
      'react': 'React.html'
  };

  // Check if the query matches any key in the redirect mapping
  if (redirectMapping[query]) {
      window.location.href = redirectMapping[query];
  } else {
      alert('No results found for your query.');
  }
});
