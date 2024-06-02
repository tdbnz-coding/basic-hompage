/* script.js */
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const dateTimeString = now.toLocaleDateString('en-GB', options);
    document.getElementById('currentDateTime').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display time immediately
