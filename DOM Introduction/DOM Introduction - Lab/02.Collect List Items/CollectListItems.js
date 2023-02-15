function extractText() {
    const result = [];
    const elements = document.querySelector('#items').children;

    for(const element of elements){
        result.push(element.textContent);
    };
    
    document.getElementById('result').value = result.join('\n');
}
extractText()