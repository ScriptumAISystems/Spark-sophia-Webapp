document.addEventListener('DOMContentLoaded', () => {
    const sendBtn       = document.getElementById('sendBtn');
    const userInput     = document.getElementById('userInput');
    const responseBox   = document.getElementById('response');
    const moodIndicator = document.getElementById('moodIndicator');
    const moodButtons   = document.querySelectorAll('.mood-buttons button');

    /* Tipp-Animation (optional) */
    function typeText(element, text, speed = 30) {
        element.textContent = '';
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text.charAt(index);
            index++;
            if (index === text.length) clearInterval(interval);
        }, speed);
    }

    /* Senden-Button */
    sendBtn.addEventListener('click', () => {
        const query = userInput.value.trim();
        if (!query) return;                 // Leere Eingabe ignorieren
        responseBox.classList.remove('hidden');

        // Dummy-Antwort
        const answer = 'Ich bin bereit, Christian.';

        // Tipp-Animation starten
        typeText(responseBox, answer);

        userInput.value = '';
    });

    /* Stimmungsknöpfe */
    moodButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.dataset.mood;          // happy | thinking | error
            moodIndicator.className = `mood ${mood}`;
        });
    });
});
