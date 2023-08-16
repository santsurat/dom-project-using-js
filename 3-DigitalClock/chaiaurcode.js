const localTime = document.getElementById('clock');

setInterval(() => {
  let date = new Date();

  localTime.innerHTML = date.toLocaleTimeString();
}, 1000);
