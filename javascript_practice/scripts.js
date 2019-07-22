let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

let nameValid = (str) => /^[a-zA-Z]*$/i.test(str);
let inputValid = (str) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(str);
let submitButton = document.getElementById('checkout');
let quantity = document.querySelectorAll('.quantity');
let v = new Object();
let e = new Object();

function elementValid (elem_name) {
    document.getElementById(elem_name).addEventListener("blur", function(event) {
        let value = document.getElementById(elem_name).value;
        try {
            if (nameValid(value) == 0) throw "invalid_input";
        }
        catch(err) {
            document.getElementById(elem_name).setAttribute("style", "border: 1px solid red;");
        }
        finally {
            if( (elem_name === "firstName" || elem_name === "lastName") && nameValid(value) == 1) {
                document.getElementById(elem_name).setAttribute("style", "border: 1px solid #777777;");
                v[`${elem_name}`] = 0;
                e[`${elem_name}`] = 0;
            }
            else if ( elem_name === "email" && inputValid(value) == 1 ){
                document.getElementById(elem_name).setAttribute("style", "border: 1px solid #777777;");
                v[`${elem_name}`] = 0;
                e[`${elem_name}`] = 0;
            }
            else {
                v[`${elem_name}`] = 1;
                e[`${elem_name}`] = 1;
            }
            validateForm(v);
            showError(e);
        }
    });
}

elementValid("firstName");
elementValid("lastName");
elementValid("email");

function validateForm (v) {
    let vals = Object.values(v);
    if (vals instanceof Array) {
        let sum = vals.reduce((acc, val) => {return acc + val });
        if (sum === 0) {
            submitButton.disabled = false;
            return 0;
        }
        else {
            submitButton.disabled = true;
            return 0;
        }
    }
    else {
        return 1;
    }
}

function showError (e) {
    let vals = Object.values(e);
    if (vals instanceof Array) {
        let verdict = 0;
        for (let i = 0; i < vals.length; i++){
            if (vals[i] === 1) verdict = 1;
        }
        if (verdict == 1) {
            document.getElementById('err').hidden = false;
            return 0;
        }
        else {
            document.getElementById('err').hidden = true;
            return 0;
        }
    }
    else {
        return 1;
    }
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
