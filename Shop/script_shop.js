$(function () {


    $(document).scroll(function () {
        let $nav = $(".header");
        let $sideNav = $("#sidebarMenu");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $sideNav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });


    const modal = document.getElementsByClassName("modal");
    const imgModal = document.getElementsByClassName("imgModal");
    const span = document.getElementsByClassName("close");

    imgModal[0].onclick = function () {
        modal[0].style.display = "block";
    }
    span[0].onclick = function () {
        modal[0].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[0]) {
            modal[0].style.display = "none";
        }
    }

    imgModal[1].onclick = function () {
        modal[1].style.display = "block";
    }
    span[1].onclick = function () {
        modal[1].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[1]) {
            modal[1].style.display = "none";
        }
    }

    imgModal[2].onclick = function () {
        modal[2].style.display = "block";
    }
    span[2].onclick = function () {
        modal[2].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[2]) {
            modal[2].style.display = "none";
        }
    }

    imgModal[3].onclick = function () {
        modal[3].style.display = "block";
    }
    span[3].onclick = function () {
        modal[3].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[3]) {
            modal[3].style.display = "none";
        }
    }
    imgModal[4].onclick = function () {
        modal[4].style.display = "block";
    }
    span[4].onclick = function () {
        modal[4].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[4]) {
            modal[4].style.display = "none";
        }
    }
    imgModal[5].onclick = function () {
        modal[5].style.display = "block";
    }
    span[5].onclick = function () {
        modal[5].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[5]) {
            modal[5].style.display = "none";
        }
    }
    imgModal[6].onclick = function () {
        modal[6].style.display = "block";
    }
    span[6].onclick = function () {
        modal[6].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[6]) {
            modal[6].style.display = "none";
        }
    }
    imgModal[7].onclick = function () {
        modal[7].style.display = "block";
    }
    span[7].onclick = function () {
        modal[7].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[7]) {
            modal[7].style.display = "none";
        }
    }
    imgModal[8].onclick = function () {
        modal[8].style.display = "block";
    }
    span[8].onclick = function () {
        modal[8].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[8]) {
            modal[8].style.display = "none";
        }
    }
    imgModal[9].onclick = function () {
        modal[9].style.display = "block";
    }
    span[9].onclick = function () {
        modal[9].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[9]) {
            modal[9].style.display = "none";
        }
    }

    const removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        const button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    function removeCartItem(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal()
    }

    function updateCartTotal() {
        const cartItemContainer = document.getElementsByClassName('cart-items')[0];
        const cartRows = cartItemContainer.getElementsByClassName('cart-row');
        let total = 0;
        for (let i = 0; i < cartRows.length; i++) {
            let cartRow = cartRows[i];
            let priceElement = cartRow.getElementsByClassName('cart-price')[0];
            let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            let price = parseFloat(priceElement.innerText.replace('$', ''));
            let quantity = quantityElement.value;
            total = total + (price * quantity);
            console.log(price * quantity)
        }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total
    }


    const quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    function quantityChanged(event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }


    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    function addToCartClicked(event) {
        let button = event.target;
        let shopItem = button.parentElement.parentElement;
        let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
        let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
        let image = shopItem.getElementsByClassName('card-img')[0].src;
        addItemToCart(title, price, image)
        updateCartTotal()
    }

    function addItemToCart(title, price, image) {

        let cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        let cartItems = document.getElementsByClassName('cart-items')[0];
        let cartItemsNames = cartItems.getElementsByClassName('cart-item-title');

            for (let i = 0; i < cartItemsNames.length; i++) {

                if (cartItemsNames[i].innerText == title) {
                    alert('This item is already added to the cart.')
                    return
                }
            }
            let cartRowContent =
                `<div class="cart-item cart-column">
                      <img class="cart-item-image" src="${image}" width="50" height="50">
                      <span class="cart-item-title">${title}</span>
              </div>
              <span class="cart-price cart-column cart-price-span">${price}</span>
              <div class="cart-quantity cart-column">
                      <input class="cart-quantity-input" type="number" value="1">
                      <button class="btn btn-danger" type="button">REMOVE</button>
              </div>`;
            cartRow.innerHTML = cartRowContent
            cartItems.append(cartRow)
            cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',
                removeCartItem)
            cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener
            ('change', quantityChanged);
    }




    document.getElementsByClassName('btn-purchase')[0].addEventListener
    ('click', purchaseClicked)

    function purchaseClicked() {
        let zeroPrice = document.getElementsByClassName('cart-total-price')[0];
        if (zeroPrice.innerText != '$0') {
            alert('Thank you for your purchase!')
            let cartItems = document.getElementsByClassName('cart-items')[0]
            while (cartItems.hasChildNodes()) {
                cartItems.removeChild(cartItems.firstChild)
            }
            updateCartTotal()
        } else {
            alert('It has to be at least one product in the cart to purchase!')
            let button = document.getElementsByClassName('btn-purchase')[0]
        }
    }


});


























