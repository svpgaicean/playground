let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

let nameValid = (str) => /^[a-zA-Z]*$/i.test(str);
let inputValid = (str) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(str);
let submitButton = document.getElementById('checkout');
let quantity = document.querySelectorAll('.quantity');
let v = [0, 0, 0];

document.getElementById("firstName").addEventListener("blur", function(event) {
    var value = document.getElementById("firstName").value;
    try {
        if(nameValid(value) == 0) throw "Input should contain only letters.";
    }
    catch(err) {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
    }
    finally {
        if(nameValid(value) == 1) {
            document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
            v[0] = 1;
            hideError();
        }
        else {
            v[0] = 0;
            showError();
        }
        validateForm(v);
    }
});

document.getElementById("lastName").addEventListener("blur", function(event) {
    var value = document.getElementById("lastName").value;
    try {
        if(nameValid(value) == 0) throw "Input should contain only letters.";
    }
    catch(err) {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
    }
    finally {
        if(nameValid(value) == 1) {
            document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
            v[1] = 1;
            hideError();
        }            
        else {
            v[1] = 0;
            showError();
        }
        validateForm(v);
    }
});

document.getElementById("email").addEventListener("blur", function(event) {
    var value = document.getElementById("email").value;
    try {
        if(inputValid(value) == 0) throw "Input should be a valid email address.";
    }
    catch(err) {
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
    }
    finally {
        if(inputValid(value) == 1) {
            document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
            v[2] = 1;
            hideError();
        }
        else {
            v[2] = 0;
            showError();
        }
        validateForm(v);
    }
});

function showError() {
    document.getElementById('err').hidden = false;
}

function hideError() {
    document.getElementById('err').hidden = true;
}

let removeCartItemButtons = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('products')[0];
    let cartRows = cartItemContainer.getElementsByClassName('product');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {    
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('price-single')[0];
        let quantityElement = cartRow.getElementsByClassName('quantity')[0];
        let price = priceElement.innerText;
        let quantity = quantityElement.innerText;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('total price')[0].innerText = total;
}

let removeItemButtons = document.getElementsByClassName('remove');
for (let i = 0; i < removeItemButtons.length; i++) {
    let button = removeItemButtons[i];
    button.addEventListener('click', function(event) {
        let quant = parseInt(quantity[i].innerText);
        if (quant > 1) {
            quantity[i].innerText = quant - 1;
        }
        updateCartTotal();
    });
}

let addItemButtons = document.getElementsByClassName('add');
for (let i = 0; i < addItemButtons.length; i++) {
    let button = addItemButtons[i];
    button.addEventListener('click', function(event) {
        let quant = parseInt(quantity[i].innerText);
        quantity[i].innerText = quant + 1;
        updateCartTotal();
    });
}

function validateForm (array) {
    if (array instanceof Array) {
        let sum = array.reduce((acc, val) => {return acc + val });
        if (sum === 3) {
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
    }
    else {
        return 0;
    }
}
