function toggle() {
    const buttonElement = document.querySelector('.button')

    if(buttonElement.textContent === 'More'){
        buttonElement.textContent = 'Less'
        document.getElementById('extra').style.display = 'block'
    }else{
        document.getElementById('extra').style.display = 'none'
        buttonElement.textContent = 'More'
    }
}