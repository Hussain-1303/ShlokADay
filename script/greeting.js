function getUserName() {
    let userName = localStorage.getItem('userName');
    
    if (!userName) {
        userName = prompt("Please enter your name:");
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }
    return userName;
}

function displayGreeting() {
    const greetingElement = document.querySelector(".greeting");

    const userName = getUserName();
    
    const greetingMessage = `Hello, ${userName}! Welcome to ShlokADay.`;
    
    if (greetingElement) {
        greetingElement.textContent = greetingMessage;
    }
}

displayGreeting();
