function updateTimeStatus() {
  const now = new Date();
  const hour = now.getHours();

  let status = "";

  if (hour >= 0 && hour < 8) {
    status = "breakone";
  } else if (hour >=9 && hour <= 10) {
    status = "breaktwo";
  } else if (hour >= 12 && hour <= 13) {
    status = "breakthree";
  } else if (hour >= 17 && hour <= 18) {
    status = "breakfour";
  } else if (hour >= 21 && hour <= 22) {
    status = "breakfive";
  } else if (hour >= 5 && hour <= 17) {
    status = "light";
  } else {
    status = "dark";
  }

  document.body.setAttribute("data-status", status);
}

updateTimeStatus(); // Call the function to set initial status

// Update status every second
setInterval(updateTimeStatus, 1000);