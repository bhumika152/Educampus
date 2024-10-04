

document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    
    addToCartBtn.addEventListener('click', function () {
        // Extract course details from button attributes
        const courseId = this.getAttribute('data-course-id');
        const courseTitle = this.getAttribute('data-course-title');
        const coursePrice = this.getAttribute('data-course-price');
        
        // Create a cart item object
        const cartItem = {
            id: courseId,
            title: courseTitle,
            price: coursePrice,
            quantity: 1
        };

        // Get existing cart from local storage or initialize an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if the item is already in the cart
        const existingItemIndex = cart.findIndex(item => item.id === courseId);
        if (existingItemIndex !== -1) {
            // If item exists, update the quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Otherwise, add the new item to the cart
            cart.push(cartItem);
        }
        
        // Save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Optional: Show a message or update UI
        alert('Item added to cart!');
    });
});


document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-content-id');
        const additionalContent = document.getElementById(contentId);

        if (additionalContent.style.display === 'none') {
            additionalContent.style.display = 'block';
            button.innerText = 'Read Less';
        } else {
            additionalContent.style.display = 'none';
            button.innerText = 'Read More';
        }
    });
});
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.classList.add('hidden');
        }
    });

    document.getElementById('course-list').addEventListener('change', function() {
        let selectedCourse = this.value;
        if (selectedCourse) {
            window.location.href = selectedCourse;
        }
    });
    
// Get modal element
var modal = document.getElementById("enrollModal");

// Get elements to display course details in the modal
var modalCourseId = document.getElementById("modal-course-id");
var modalCourseName = document.getElementById("modal-course-name");
var modalCoursePrice = document.getElementById("modal-course-price");
var modalCourseQuantity = document.getElementById("modal-course-quantity");

// Get the button that opens the modal
var enrollBtn = document.querySelector('.enroll-btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the enroll button, open the modal and display the course details
enrollBtn.onclick = function() {
    modal.style.display = "block";
    modalCourseId.textContent = this.getAttribute('data-course-id');
    modalCourseName.textContent = this.getAttribute('data-course-name');
    modalCoursePrice.textContent = this.getAttribute('data-course-price');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Pay button functionality
document.getElementById('pay-button').onclick = function() {
    const courseId = modalCourseId.textContent;
    const courseName = modalCourseName.textContent;
    const coursePrice = modalCoursePrice.textContent;
    const quantity = modalCourseQuantity.value;
    alert(`Proceeding to pay for ${quantity} x ${courseName} (ID: ${courseId}) at a price of ₹${coursePrice} each.`);
    // Add your payment processing logic here
}
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
  