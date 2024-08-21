// setEvent.js

document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the event date and time from the input
  const eventDate = document.getElementById("eventDate").value;

  // Save the event date and time to local storage
  localStorage.setItem("eventDate", eventDate);

  // Redirect to the countdown page
  window.location.href = "countdown.html";
});