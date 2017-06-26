var formSubmitEl = document.querySelector('.form__submit');
var groceryListItemInputEl = document.querySelector('.grocery-item-name--input');
var groceryListEl = document.querySelector('.grocery-list');
var formErrorEl = document.querySelector('.form__error');
var formSuccessEl = document.querySelector('.form__success');

var addClickHandlerGroceryItem = function (elem) {
  elem.onkeydown = function (event) {
    if (event.keyCode && event.keyCode === 13) {
      elem.classList.toggle('grocery-item--bought');
    }
  };
  elem.onmouseup = function () {
    elem.classList.toggle('grocery-item--bought');
  }
};

var addSubmitBtnHandler = function() {  
  formSubmitEl.onclick = function (event) {
    event.preventDefault();
    formErrorEl.style.display = 'none';
    formSuccessEl.style.display = 'none';

    var newItem = groceryListItemInputEl.value;
    if (newItem === '') {
      formErrorEl.style.display = 'block';
    } else {
      var newItemEl = document.createElement('li');
      newItemEl.setAttribute('role', 'button');
      newItemEl.classList.add('grocery-item');
      newItemEl.setAttribute('tabindex', '0');
      newItemEl.setAttribute('title', newItem);
      newItemEl.innerText = newItem;
      addClickHandlerGroceryItem(newItemEl);
      groceryListEl.append(newItemEl);
      formSuccessEl.innerText = 'You have successfully added ' + newItem + ' to your grocery list!';
      formSuccessEl.style.display = 'block';
    }
  }
}

function goBackToList() {
  event.preventDefault();
  groceryListItemInputEl.focus();
}

function goToViewList() {
  event.preventDefault();
  groceryListEl.focus();
}

function goToAddList() {
  event.preventDefault();
  groceryListItemInputEl.focus();
}

var groceryItems = document.getElementsByClassName('grocery-item');
var count = groceryItems.length;
for (var idx = 0; idx < count; ++idx) {
  var groceryItem = groceryItems[idx];
  addClickHandlerGroceryItem(groceryItem);
}

addSubmitBtnHandler();