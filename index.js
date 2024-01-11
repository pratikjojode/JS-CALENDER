document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const calendarDate = new Date();

    // Display the current date, day, month, and year
    dateElement.textContent = (calendarDate.getDate() < 10) ? `0${calendarDate.getDate()}` : calendarDate.getDate();
    dayElement.textContent = daysOfWeek[calendarDate.getDay()];
    monthElement.textContent = months[calendarDate.getMonth()];
    yearElement.textContent = calendarDate.getFullYear();
});
