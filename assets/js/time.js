function updateTime() {
  var now = new Date();
  var options = {
    timeZone: 'America/New_York',
    hour12: true, // Display time in 12-hour format
    hour: 'numeric',
    minute: 'numeric'
  };
  var atlantaTime = now.toLocaleTimeString('en-US', options);

  document.getElementById('clock').textContent = atlantaTime;
}

setInterval(updateTime, 1000);