function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  const transformedText = [];

  if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
    document.getElementById('result').textContent = 'Error!';
    return;
  }

  text.split(' ')
    .forEach((word, i) => {
      word = word.toLowerCase();
      let result = '';

      if (i === 0 && convention === 'Camel Case') {
        result = word;
      } else {
        const firstLetter = word[0].toUpperCase();
        result = firstLetter + word.slice(1);
      }

      transformedText.push(result);
    })

  document.getElementById('result').textContent = transformedText.join('');
}