document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        let subtotal = 0;

        cart.forEach(item => {
            // Ensure that the item price is correctly parsed, replacing &#8377; with ₹.
            const itemPrice = parseFloat(item.price.replace('₹', ''));
            const itemTotal = itemPrice * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.title}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${itemTotal.toFixed(2)}</td>
                <td><button class="remove-from-cart" data-course-id="${item.id}">Remove</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        cartSubtotal.innerText = `${subtotal.toFixed(2)}`;
    }

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function () {
            const courseId = this.getAttribute('data-course-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemIndex = cart.findIndex(item => item.id === courseId);
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity -= 1;
                } else {
                    cart = cart.filter(item => item.id !== courseId);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.reload();
            }
        });
    });
});
