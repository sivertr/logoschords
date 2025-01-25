// splitText.js
function splitText(input) {
    const vowels = 'aeiouyæøåAEIOUÆØÅ';

    function isVowel(char) {
        return vowels.indexOf(char) !== -1;
    }

    function splitWordByVowels(word) {
        let result = [];
        let vowelIndices = [];
        
        for (let i = 0; i < word.length; i++) {
            if (isVowel(word[i])) {
                vowelIndices.push(i);
            }
        }

        let startIdx = 0;
        for (let i = 0; i < vowelIndices.length - 1; i++) {
            let endIdx = vowelIndices[i + 1];
            let midIdx = Math.floor((vowelIndices[i] + endIdx) / 2);
            
            result.push(word.slice(startIdx, midIdx + 1));
            startIdx = midIdx + 1;
        }

        result.push(word.slice(startIdx));
        return result;
    }

    let parts = input.split(/(\s+)/);
    let output = [];

    parts.forEach(part => {
        if (part.trim() === '' || part === "\n") {
            output.push(part);
        } else {
            let splitWord = splitWordByVowels(part);
            output.push(...splitWord);
        }
    });

    return output;
}