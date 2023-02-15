function encodeAndDecodeMessages() {
    const encodeBttn = document.querySelector('#main div:nth-child(1) button').addEventListener('click', encode)
    const decodeBttn = document.querySelector('#main div:nth-child(2) button').addEventListener('click', () => {
        output.value = originalText;
    })

    const input = document.querySelector('#main div:nth-child(1) textarea')
    const output = document.querySelector('#main div:nth-child(2) textarea')
    
    let originalText = ''

    function encode() {
        let encodedText = '';
        for (let i = 0; i < input.value.length; i++) {
            originalText += input.value[i];
            encodedText += String.fromCharCode(input.value.charCodeAt(i) + 1);
        }
        input.value = ''
        output.value = encodedText;
    }
}