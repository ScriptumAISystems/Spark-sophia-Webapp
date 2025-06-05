document.addEventListener('DOMContentLoaded', () => {
    const sendBtn       = document.getElementById('sendBtn');
    const userInput     = document.getElementById('userInput');
    const responseBox   = document.getElementById('response');
    const moodIndicator = document.getElementById('moodIndicator');
    const moodButtons   = document.querySelectorAll('.mood-buttons button');
let currentMood = null;

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

       try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer testtoken'
            },
            body: JSON.stringify({ question: query, mood: currentMood })
        });
        const data = await res.json();
        const answer = data.answer || 'Keine Antwort erhalten.';
        typeText(responseBox, answer);
                       // Text-to-Speech
            if ('speechSynthesis' in window) {
                const utter = new SpeechSynthesisUtterance(answer);
                utter.lang = 'de-DE';
                speechSynthesis.speak(utter);
            }
    } catch (err) {
        typeText(responseBox, 'Fehler beim Abruf der Antwort.');
    }

    userInput.value = '';

        userInput.value = '';
    });

    /* Stimmungsknöpfe */
    moodButtons.forEach(btn => {
       const mood = btn.dataset.mood; // happy | thinking | error
    currentMood = mood;
    moodIndicator.className = 'mood ' + mood;moodIndica
        });
    });
});
