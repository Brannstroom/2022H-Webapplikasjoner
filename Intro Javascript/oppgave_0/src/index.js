// Oppgave 1

const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", function() {

    const text = document.getElementById("remove");
    text.innerHTML = "";

});

// Oppgave 2

const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", function() {

    const text = document.getElementById("change");
    text.innerHTML = "wop wop";

});

// Oppgave 3

const inputBox = document.getElementById("input");
inputBox.addEventListener("input", function() {

    const inputText = document.getElementById("input-text");
    inputText.innerHTML = inputBox.value;

});

// Oppgave 4

const myList = ['item one', 'item two', 'item three'];

const writeListBtn = document.getElementById("write-list");
const list = document.getElementById("ul");

writeListBtn.addEventListener("click", function() {

    for(var i = 0; i < myList.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = myList[i];
        list.appendChild(li);
    }

});

// Oppgave 5

const placeholder = document.getElementById("placeholder");
const input = document.getElementById("text");
const option = document.getElementById("select");

const createText = document.getElementById("create");
createText.addEventListener("click", function() {

    if(input.value != "") {

        var elem = document.createElement(option.value);
        elem.innerHTML = input.value;
        placeholder.appendChild(elem);

    }
    else {
        console.log("Du må skrive noe i input boksen.");
    }

});

// Oppgave 6

const elementList = document.getElementById("list");
const removeButton = document.getElementById("remove-li");

removeButton.addEventListener("click", function() {

    elementList.removeChild(elementList.lastElementChild);

});


// Oppgave 7

const nameInput = document.getElementById("name");
const orderBtn = document.getElementById("order");

orderBtn.disabled = true;

nameInput.addEventListener("input", function() {

    if(nameInput.value.length > 4 || nameInput.value.length == 0) {
        orderBtn.disabled = true;
    }
    else {
        orderBtn.disabled = false;
    }

});

// Oppgave 8

const colorButton = document.getElementById("color");

const parent = document.getElementsByClassName("children");
const children = parent[0].children;

colorButton.addEventListener("click", function() {
    for(var i = 0; i < children.length; i++) {
        if(i % 2 == 0) {
            children[i].style.backgroundColor = "pink";
        }
        else {
            children[i].style.backgroundColor = "green";
        }
    }
});


