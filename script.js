// script.js

// Retrieve the event date from local storage
const eventDate = new Date(localStorage.getItem("eventDate")).getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "Event has started!";
  }
}, 1000);