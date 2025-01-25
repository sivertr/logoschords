# Web Application for Song Lyrics and Chords

This web application allows users to input song lyrics, split the lyrics into syllables, and enter chords above each displayed syllable to create a chord sheet.

## Project structure

LogosChords
├── README.md                # Documentation for the project
├── index.html               # Main HTML file for the application
├── resources                # Directory for resources like images
│   └── LOGO.png             # Logo image for the application
├── scripts                  # Directory for JavaScript files
│   ├── app.js               # JavaScript file for application logic
│   ├── splitText.js         # JavaScript file for splitting text into syllables
│   ├── chordPro.js          # JavaScript file for handling chord input
│   └── chordProRendering.js # JavaScript file for rendering ChordPro content
├── styles                   # Directory for CSS files
│   ├── style.css            # CSS file for styling the application
│   └── chordPro.css         # CSS file for styling ChordPro content

## Features

- Input field for entering song lyrics.
- Button to trigger the syllable splitting.
- Dynamic display of syllables with input fields for chords above each syllable.
- Button to generate and copy ChordPro formatted text.
- Tabbed interface for switching between chord editor and preview.

## Usage

- Enter the song lyrics in the provided input field.
- Click the "Generate chord table" button to split the lyrics into syllables.
- Enter chords in the input fields displayed above each syllable.
- Click the "Copy ChordPro" button to generate and copy the ChordPro formatted text.
- Switch to the "Preview" tab to see the rendered ChordPro content.

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License.