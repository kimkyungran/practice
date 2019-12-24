
// You're gonna need this
// const NINE_HOURS_MILLISECONDS = 32400000;

const clock = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  const now = new Date();

  const count = xmasDay - now; 

  const day = Math.floor(count / (1000*60*60*24));
  const hours = Math.floor((count % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((count % (1000*60*60)) / (1000 * 60));
  const seconds = Math.floor((count % (1000*60)) / 1000)

  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`
  
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
