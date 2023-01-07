function wordsUppercase(text) {
    let pattern = /\w+/g;
    let matches = text.match(pattern);
    let result = [];
    matches.forEach(match => result.push(match.toUpperCase()));
    console.log(result.join(', '));
}
wordsUppercase('Hi, how are you?')