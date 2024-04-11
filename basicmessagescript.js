document.addEventListener("DOMContentLoaded", function() {
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const messageList = document.getElementById("messages");

    // Load messages from localStorage when the page loads
    loadMessages();

    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            addMessage(messageText);
            saveMessages();
            messageInput.value = "";
        }
    });

    function addMessage(messageText) {
        const li = document.createElement("li");
        li.classList.add("message");
        li.textContent = messageText;
        messageList.appendChild(li);
    }

    function saveMessages() {
        const messages = [];
        const messageElements = messageList.querySelectorAll(".message");
        messageElements.forEach(function(messageElement) {
            messages.push(messageElement.textContent);
        });
        localStorage.setItem("messages", JSON.stringify(messages));
    }

    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.forEach(function(messageText) {
            addMessage(messageText);
        });
    }
});