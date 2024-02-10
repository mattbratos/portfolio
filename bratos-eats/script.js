import { menuArray } from './data.js';

function renderMenu() {
    const menuContainer = document.getElementById("menu-container");

    menuArray.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <div class="menu-item-container">
                <h1 class="menu-icon">${item.emoji}</h1>
                <div class="dish-container"> 
                    <h2 class="dish-title">${item.name}</h2>
                    <p class="dish-description">${item.ingredients.join(", ")}</p>
                    <p class="price">$${item.price}</p>
                </div>
                <button class="add-to-cart">+</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);

        const addToCartButton = menuItem.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", function() {
            showOrderContainer();
            addToOrder(item);
        });
    });

    setupPlaceOrderButton(); // This function call should be inside renderMenu function
}

function showOrderContainer() {
    const orderContainer = document.querySelector('.order-container');
    if (orderContainer.style.display === 'none' || !orderContainer.style.display) {
        orderContainer.style.display = 'block';
    }
}

function addToOrder(item) {
    const orderList = document.getElementById('order-list');
    const totalElement = document.getElementById('total');

    const orderItem = document.createElement('li');
    orderItem.textContent = `${item.name} - $${item.price}`;
    orderList.appendChild(orderItem);

    let currentTotal = parseFloat(totalElement.textContent.substring(1));
    currentTotal += item.price;
    totalElement.textContent = `$${currentTotal.toFixed(2)}`;
}

function displayPaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    paymentModal.style.display = 'block';
}

function setupPlaceOrderButton() {
    const placeOrderButton = document.getElementById('place-order');
    if (placeOrderButton) {
        placeOrderButton.addEventListener('click', function() {
            displayPaymentModal();
        });
    } else {
        console.error('Place order button not found');
    }
}

renderMenu();
