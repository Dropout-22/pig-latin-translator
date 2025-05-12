// script.js
function translateToPigLatin() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const words = input.trim().split(/\s+/);
    const pigLatinWords = words.map(word => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/gi, "");
      if (/^[aeiou]/.test(cleanWord)) {
        return cleanWord + "yay";
      } else {
        const firstVowelIndex = cleanWord.search(/[aeiou]/);
        if (firstVowelIndex === -1) return cleanWord + "ay"; // no vowels, just add "ay"
        return cleanWord.slice(firstVowelIndex) + cleanWord.slice(0, firstVowelIndex) + "ay";
      }
    });
    output.textContent = pigLatinWords.join(" ");
}
  