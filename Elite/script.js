// Select elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBody = document.getElementById('chatbot-body');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotClear = document.getElementById('chatbot-clear'); // Clear Chat button

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
    if (chatbotBody.style.display === 'none' || chatbotBody.style.display === '') {
        chatbotBody.style.display = 'flex';
    } else {
        chatbotBody.style.display = 'none';
    }
});

// Function to add a message to the chat
function addMessage(content, sender, isLink = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    if (isLink) {
        // Create a clickable link
        const messageText = document.createElement('a');
        messageText.href = content.link;
        messageText.textContent = content.text;
        messageText.target = "_blank";
        messageText.style.color = '#d4af37';
        messageText.style.textDecoration = 'underline';
        messageDiv.appendChild(messageText);
    } else {
        // Create a regular message
        const messageText = document.createElement('p');
        messageText.textContent = content;
        messageDiv.appendChild(messageText);
    }

    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle user input
function handleUserInput() {
    const userMessage = chatbotInput.value.trim();

    if (userMessage) {
        addMessage(userMessage, 'user'); // Add user's message
        chatbotInput.value = ''; // Clear input field

        setTimeout(() => {
            generateBotResponse(userMessage); // Generate bot response
        }, 1000);
    }
}

// Predefined bot responses for a jewelry website
function generateBotResponse(userMessage) {
    const responses = {
        hi: "Hi! Welcome to our jewelry store. How can I assist you today? 😊",
        hello: "Hello there! Looking for something special today?",
        rings: { text: "Sure! Check out our beautiful rings here.", link: "Categories Page/cat.html#rings" },
        necklaces: { text: "Explore our stunning necklaces on this page.", link: "Categories Page/cat.html#necklaces" },
        bracelets: { text: "Browse our elegant bracelets collection here.", link: "Categories Page/cat.html#bracelets" },
        anklets: { text: "Explore our stunning anklets on this page.", link: "Categories Page/cat.html#anklets" },
        earrings: { text: "Browse our elegant earrings collection here.", link: "Categories Page/cat.html#earrings" },
        support: { text: "You can contact our support team here.", link: "#foot" },
        'custom designs': "Yes, we offer custom jewelry designs! Let us know your requirements or visit the Custom Designs page.",
        'store hours': "We are open from 9 AM to 9 PM, Monday to Saturday. 🕘",
        'free shipping': "Yes, we provide free shipping on orders over $100. 🚚",
        clear: "Chat cleared! How can I assist you now? 😊", // Response for clearing the chat
        default: "I'm not sure I understand that. Can you please clarify? 😊"
    };

    const lowerCaseMessage = userMessage.toLowerCase();

    // Handle "clear chat" command
    if (lowerCaseMessage === 'clear chat') {
        chatbotMessages.innerHTML = ''; // Clear chat messages
        addMessage(responses.clear, 'bot');
        return;
    }

    // Handle responses with links
    if (responses[lowerCaseMessage] && typeof responses[lowerCaseMessage] === 'object') {
        addMessage(responses[lowerCaseMessage], 'bot', true); // Add message as a link
    } else {
        const response = responses[lowerCaseMessage] || responses.default;
        addMessage(response, 'bot');
    }
}

// Clear chat functionality
chatbotClear.addEventListener('click', () => {
    chatbotMessages.innerHTML = ''; // Clear all messages in the chatbox
    addMessage("Chat cleared! How can I assist you now? 😊", 'bot');
});

// Send message when the send button is clicked
chatbotSend.addEventListener('click', handleUserInput);

// Send message when "Enter" is pressed
chatbotInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUserInput();
    }
});