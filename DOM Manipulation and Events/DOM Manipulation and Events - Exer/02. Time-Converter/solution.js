function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]')).forEach(btn => btn.addEventListener('click', convert))

    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')

    function convert(event) {
        const curValue = event.target.previousElementSibling.id
        const startPoint = event.target.previousElementSibling.value

        if (curValue === 'days') {
            startDays(startPoint)
        } else if (curValue === 'hours') {
            startHours(startPoint)
        } else if (curValue === 'minutes') {
            startMinutes(startPoint)
        } else {
            startSeconds(startPoint)
        }

        function startDays(startPoint) {
            hours.value = Number(startPoint) * 24;
            minutes.value = Number(startPoint) * 1440;
            seconds.value = Number(startPoint) * 86400;
        }
        function startHours(startPoint) {
            days.value = Number(startPoint) / 24;
            minutes.value = Number(days.value) * 1440;
            seconds.value = Number(days.value) * 86400;
        }
        function startMinutes(startPoint) {
            days.value = Number(startPoint) / 1440;
            hours.value = Number(days.value) * 24;
            seconds.value = Number(days.value) * 86400;
        }
        function startSeconds(startPoint) {
            days.value = Number(startPoint) / 86400;
            hours.value = Number(days.value) * 24;
            minutes.value = Number(days.value) * 1440;
        }
    }
}