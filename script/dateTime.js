function formatDateTime(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    };
    
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function displayDateTime() {
    const dateTimeElement = document.querySelector('.date-time');
    const now = new Date();
    dateTimeElement.textContent = `Current Date & Time: ${formatDateTime(now)}`;
}

displayDateTime();

setInterval(displayDateTime, 60000); 
