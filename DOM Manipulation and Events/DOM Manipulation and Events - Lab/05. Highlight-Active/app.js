function focused() {
    const elements = Array.from(document.querySelectorAll('body div div input'))
    elements.map(element => element.addEventListener('focus', blurred))

    function blurred(event) {
        elements.map(el => el.parentElement.classList.remove("focused"))
        const element = event.target;
        element.parentElement.classList.add("focused")
    }
}