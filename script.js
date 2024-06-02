function updateDateTime() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const dateTimeString = `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('date-time').innerText = dateTimeString;
}

// Ensure the function runs after the DOM has fully loaded
window.onload = function() {
    // Update date and time every second
    setInterval(updateDateTime, 1000);

    // Initial call to display the date and time immediately when the page loads
    updateDateTime();
}
