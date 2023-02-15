function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onClick)

    function onClick(event){
        document.getElementById('result').textContent = `${Math.floor(event.offsetX / 300 * 100)}%`
    }
}