// displaying current UTC time and day
function updateTime() {
  const currentTimeUTC = new Date().toISOString().split('T')[1].split('.')[0];
  document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
  }
  
  function updateDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[new Date().getUTCDay()];
  document.getElementById('currentDay').textContent = currentDay;
  }
  
  updateTime();
  updateDay();
  setInterval(updateTime, 1000); // Update time every second
  