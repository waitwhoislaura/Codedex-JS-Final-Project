const bells = new Audio('./bell-sound.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes'); 
const secondDiv = document.querySelector('.seconds')
let myInterval; 
let state = true;
let totalSeconds = Number.parseInt(session.textContent)*60;

function appTimer() {
    if(state) {
        state = false;
  
        function updateSeconds() {
            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;
        
            session.textContent = `${minutesLeft}`;
            secondDiv.textContent = secondsLeft.toString().padStart(2, '0');
                        
            if(totalSeconds <= 0) {
                bells.play()
                clearInterval(myInterval);
                state = true;
                return;
            }
            
            totalSeconds--;
        }
        myInterval = setInterval(updateSeconds, 1000);
    }else{
      alert('Session has already started.')
    }
}

function stopTimer(){
    clearInterval(myInterval);
    state = true;
}

function resetTimer(){
    clearInterval(myInterval);
    session.textContent = '25';
    secondDiv.textContent = '00';
    state = true;
    totalSeconds = 25*60;
}

startBtn.addEventListener('click', appTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);