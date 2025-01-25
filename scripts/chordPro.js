// chordPro.js
function generateChordPro(title, composer, key, table) {
    let chordProText = '';

    if (title) chordProText += `{title: ${title}}\n`;
    if (composer) chordProText += `{composer: ${composer}}\n`;
    if (key) chordProText += `{key: [${key}]}\n`;

    const rows = table.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i += 2) {
        const chordRow = rows[i];
        const syllableRow = rows[i + 1];

        if (!syllableRow) continue; // Ensure syllableRow is defined

        const chordCells = chordRow.querySelectorAll('td');
        const syllableCells = syllableRow.querySelectorAll('td');

        for (let j = 0; j < syllableCells.length; j++) {
            if (!chordCells[j] || !chordCells[j].querySelector('input')) continue;

            let input = chordCells[j].querySelector('input');

            if (!input) continue;

            const chord = input.value;
            const syllable = syllableCells[j].textContent;

            if (chord) {
                chordProText += `[${chord}]${syllable}`;
            } else {
                chordProText += syllable;
            }
        }
        chordProText += '\n';
    }

    return chordProText;
}