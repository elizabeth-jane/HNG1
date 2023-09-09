const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[currentDate.getUTCDay()];


 function updateClock() {
       const currentTime = new Date();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = new Date().getTime();
   }
    
   updateClock();
    

    setInterval(updateClock, 1000);
    
   