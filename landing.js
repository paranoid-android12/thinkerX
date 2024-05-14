function startCountdown(countdownDate, targetElementId) {
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        let distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            distance = 0;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

        const countdownString = `${days} : ${hours} : ${minutes} : ${seconds}`;
        document.getElementById(targetElementId).innerHTML = countdownString;
    }, 1000);
}

const countdownDate = new Date('2024-05-17T00:00:00').getTime();
startCountdown(countdownDate, 'countdown');

