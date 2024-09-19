function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; 
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Speech synthesis not supported in this browser.');
    }
}

function initializePronunciation() {
    const pronunciationElement = document.querySelector('.pronunciation');
    const text = pronunciationElement.textContent;

    const button = document.createElement('button');
    button.textContent = 'Listen to Pronunciation';
    button.classList.add('pronunciation-button');

    button.addEventListener('click', () => {
        speakText(text);
    });

    pronunciationElement.appendChild(button);
}

initializePronunciation();
