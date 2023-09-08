const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[currentDate.getUTCDay()];


function updateClock() {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
        document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    updateClock();
    

    setInterval(updateClock, 1000);
    
   