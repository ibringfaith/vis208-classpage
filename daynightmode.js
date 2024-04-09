function updateTimeStatus() {
  const now = new Date();
  const hour = now.getHours();

  let status = "";

  if (hour >= 0 && hour < 8) {
    status = "breakone";
    document.body.style.backgroundColor = '#685E5A';
  } else if (hour >=9 && hour < 10) {
    status = "breaktwo";
    document.body.style.backgroundColor = '#827570';
  } else if (hour >= 12 && hour < 13) {
    status = "breakthree";
    document.body.style.backgroundColor = '#827570';
  } else if (hour >= 17 && hour < 18) {
    status = "breakfour";
    document.body.style.backgroundColor = '#685E5A';
  } else if (hour >= 21 && hour < 22) {
    status = "breakfive";
    document.body.style.backgroundColor = '#685E5A';
  } else if (hour >= 5 && hour < 17) {
    status = "light";
    document.body.style.backgroundColor = '#827570';
  } else {
    status = "dark";
    document.body.style.backgroundColor = '#685E5A';
  }

  document.body.setAttribute("data-status", status);
}

updateTimeStatus(); // Call the function to set initial status

// Update status every second
setInterval(updateTimeStatus, 1000);