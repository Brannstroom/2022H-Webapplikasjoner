function removeTodo(button) {
    var parent = button.parentElement;
    parent.parentNode.removeChild(parent);
}

function add() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if(title === "") {
        document.getElementById("title").placeholder = "Todo must contain title."
    }

    if(content === "") {
        document.getElementById("content").placeholder = "Your todo must have content."
    }

    if(title !== "" && content !== "") {
        var todosSection = document.getElementById("todos");
        var newTodo = document.createElement("div");
        newTodo.innerHTML = '<h3>' + title + '</h3>' +
        '<p>' + content + '</p>' +
        '<button onclick="removeTodo(this)">Complete</button>';
        todosSection.appendChild(newTodo);
    }
}