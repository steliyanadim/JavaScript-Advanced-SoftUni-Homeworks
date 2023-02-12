function colorize() {
    const elements = Array.from(document.querySelector('table tbody').children);
    elements.filter((element, i) => i % 2 !== 0).forEach(element => element.style.background = 'teal')
}
