function lockedProfile() {
    const bttns = Array.from(document.querySelectorAll('button')).map(bttn => bttn.addEventListener('click', show));

    function show(event) {
        const parent = event.target.parentElement;
        const isLocked = parent.querySelector('input[value="lock"]').checked;
        const bttnContent = event.target;

        if (!isLocked) {
            if (bttnContent.textContent === 'Show more') {
                parent.querySelector('div').style.display = 'block';
                bttnContent.textContent = 'Hide it';
            } else {
                parent.querySelector('div').style.display = 'none';
                bttnContent.textContent = 'Show more';
            }
        }
    }
}
