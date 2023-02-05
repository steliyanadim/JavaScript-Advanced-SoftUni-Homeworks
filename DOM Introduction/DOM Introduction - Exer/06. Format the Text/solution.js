function solve() {
  const text = document.querySelector('#input').value;
  const sentances = text.split('.').filter(sentance => sentance !== '');
  const parentEl = document.querySelector('#output');

  for (let i = 0; i < sentances.length; i += 3) {
    const content = sentances.slice(i, i + 3).map(sentance => sentance = sentance + '.').join('');
    const newParagraph = document.createElement("p");
    newParagraph.textContent = content;
    parentEl.appendChild(newParagraph);
  }
}