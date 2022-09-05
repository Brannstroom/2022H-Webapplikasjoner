const LIST_LENGTH = 5;

// TODO: Bruk getElementById til å hente HTML-elementene med #id
const guess = document.getElementById("guess");
const numbers = document.getElementById("numbers");

// TODO: Bruk querySelector til å hente knappen
const button = document.querySelector("button");

// TODO: Lag en liste med tallene som skal sorteres
const randomNumbers = Array.from({ length: LIST_LENGTH }, () =>
    Math.floor(Math.random() * 100 + 1)
);

console.log(randomNumbers);

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
function printNumbers() {
    numbers.innerHTML = randomNumbers.join(", ");
};


// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
function printInputFields() {
    for (let i = 0; i < randomNumbers.length; i++) {
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", `number${i}`);
        guess.appendChild(input);
    }
};

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
function getValues() {
    const values = [];
    for (let i = 0; i < randomNumbers.length; i++) {
        const input = document.getElementById(`number${i}`);
        values.push(Number(input.value));
    }
    return values;
};

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
function checkNumberSeq() {
    const values = getValues();
    return values.toString() === randomNumbers.sort().toString();
};

// TODO: Lag en funksjon som "lager UI" --Nødvendig?
function createUi() {
    printNumbers();
    printInputFields();
}

// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
button.addEventListener("click", () => {

    if (checkNumberSeq()) {
        alert("Riktig!");
    } else {
        alert("Feil!");
    }
}
);

createUi();