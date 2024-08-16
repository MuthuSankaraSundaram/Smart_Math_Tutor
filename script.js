function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

   
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = userInput;
    document.getElementById('chatBox').appendChild(userMessage);

    
    document.getElementById('userInput').value = "";

    setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        botMessage.textContent = botResponse;
        document.getElementById('chatBox').appendChild(botMessage);

       
        document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
    }, 500);
}

function generateBotResponse(userInput) {
    try {
        // Evaluate the arithmetic expression
        const result = eval(userInput);
        if (!isNaN(result)) {
            return `The answer is ${result}`;
        } else {
            return "I can only help with arithmetic operations like addition, subtraction, multiplication, and division.";
        }
    } catch (error) {
        return "Please enter a valid arithmetic expression.";
    }
}
