document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('message-form');
    const messagesContainer = document.getElementById('messages');
    const apiUrl = 'http://localhost:3000/messages'; // Replace this with your backend URL

    // Function to fetch messages from the server and display them
    async function fetchMessages() {
        try {
            const response = await fetch(apiUrl);
            const messages = await response.json();

            messages.forEach(message => {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');
                messageElement.innerHTML = `
                    <h3>${message.username}</h3>
                    <p>${message.text}</p>
                `;
                messagesContainer.appendChild(messageElement);
            });
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }

    // Fetch messages when the page loads
    fetchMessages();

    // Function to handle form submission
    messageForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('message');

        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();

        if (username === '' || message === '') {
            alert('Please enter your name and message.');
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, text: message })
            });

            if (!response.ok) {
                throw new Error('Failed to post message');
            }

            const newMessage = await response.json();

            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `
                <h3>${newMessage.username}</h3>
                <p>${newMessage.text}</p>
            `;

            messagesContainer.appendChild(messageElement);

            // Clear form inputs
            usernameInput.value = '';
            messageInput.value = '';
        } catch (error) {
            console.error('Error posting message:', error);
        }
    });
});