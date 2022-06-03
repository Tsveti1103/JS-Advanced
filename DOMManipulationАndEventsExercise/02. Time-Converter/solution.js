function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', convertTo);
    document.getElementById('hoursBtn').addEventListener('click', convertTo);
    document.getElementById('minutesBtn').addEventListener('click', convertTo);
    document.getElementById('secondsBtn').addEventListener('click', convertTo);

    const units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }


    function convertTo(ev) {
        const textAreaId = ev.target.id.slice(0, -3);
        let textArea = document.getElementById(textAreaId);
        let daysVal = Number(textArea.value) / units[textAreaId];
        document.getElementById('days').value = daysVal;
        document.getElementById('hours').value = daysVal * units.hours;
        document.getElementById('minutes').value = daysVal * units.minutes;
        document.getElementById('seconds').value = daysVal * units.seconds;

    }

}