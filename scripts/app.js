// app.js
document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('titleInput');
    const composerInput = document.getElementById('composerInput');
    const keyInput = document.getElementById('keyInput');
    const lyricsInput = document.getElementById('lyricsInput');
    const splitButton = document.getElementById('splitButton');
    const outputContainer = document.getElementById('outputContainer');
    const generateChordProButton = document.getElementById('generateChordProButton');

    splitButton.addEventListener('click', function() {
        const lyrics = lyricsInput.value;
        const lines = lyrics.split('\n');
        const chordEditor = document.getElementById('chordEditor');
        chordEditor.innerHTML = ''; // Clear previous content

        const table = document.createElement('table');

        lines.forEach(line => {
            if (line.trim() === '') {
                // Add an empty row to indicate a break
                const emptyRow = document.createElement('tr');
                const emptyCell = document.createElement('td');
                emptyCell.colSpan = 2; // Span across both columns
                emptyCell.innerHTML = '&nbsp;'; // Add a non-breaking space
                emptyRow.appendChild(emptyCell);
                table.appendChild(emptyRow);
            } else {
                const syllables = splitText(line);
                const chordRow = document.createElement('tr');
                const syllableRow = document.createElement('tr');

                syllables.forEach(syllable => {
                    const chordCell = document.createElement('td');
                    const syllableCell = document.createElement('td');

                    const chordInput = document.createElement('input');
                    chordInput.type = 'text';
                    chordInput.classList.add('chord-input'); // Add the class to the chord input fields

                    chordCell.appendChild(chordInput);
                    syllableCell.textContent = syllable;

                    chordRow.appendChild(chordCell);
                    syllableRow.appendChild(syllableCell);
                });

                table.appendChild(chordRow);
                table.appendChild(syllableRow);
            }
        });

        chordEditor.appendChild(table);
    });

    generateChordProButton.addEventListener('click', function() {
        const table = outputContainer.querySelector('table');
        if (!table) return;

        const title = titleInput.value;
        const composer = composerInput.value;
        const key = keyInput.value;

        const chordProText = generateChordPro(title, composer, key, table);

        navigator.clipboard.writeText(chordProText).then(() => {
            alert('ChordPro content copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const activeTab = document.getElementById(button.dataset.tab);
            activeTab.classList.add('active');

            if (button.dataset.tab === 'preview') {

                const table = outputContainer.querySelector('table');
                if (!table) return;

                const title = titleInput.value;
                const composer = composerInput.value;
                const key = keyInput.value;
                const chordProText = generateChordPro(title, composer, key, table);
                const renderedContent = parseChordPro(chordProText, false);
                activeTab.innerHTML = `<div class="rendering-target">${renderedContent}</div>`;
            }

        });
    });
});