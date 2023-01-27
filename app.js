const workInput = document.querySelector('.travail .time');
const SpleepInput = document.querySelector('.repos .time');
const cycleInput = document.querySelector('.cycles span');


const btnPause = document.querySelector('.btn-pause');
const btnReset = document.querySelector('.btn-reset');


const TIME_WORK_DEFAULT = 30;
const TIME_SLEEP_DEFAULT = 5;

let timeLeftWorkSeconde = 0;
let timeLeftWorkMinute = TIME_WORK_DEFAULT;

let timeLeftSleepSeconde = 0;
let timeLeftSleepMinute = TIME_SLEEP_DEFAULT;

let cycle = 0;

let pause = true;

btnPause.addEventListener('click', () => {
    console.log('click')
    pause = !pause;
});

btnReset.addEventListener('click', () => {
    console.log('click')
    pause = true;
    timeLeftWorkSeconde = 0;
    timeLeftWorkMinute = TIME_WORK_DEFAULT;

    timeLeftSleepSeconde = 0;
    timeLeftSleepMinute = TIME_SLEEP_DEFAULT;

    workInput.textContent = `${timeLeftWorkMinute.toString().length == 1 ? '0' + timeLeftWorkMinute : timeLeftWorkMinute}:${timeLeftWorkSeconde.toString().length == 1 ? '0' + timeLeftWorkSeconde : timeLeftWorkSeconde}`;
    SpleepInput.textContent = `${timeLeftSleepMinute.toString().length == 1 ? '0' + timeLeftSleepMinute : timeLeftSleepMinute}:${timeLeftSleepSeconde.toString().length == 1 ? '0' + timeLeftSleepSeconde : timeLeftSleepSeconde}`;
});


timeWorkFunc()

function timeWorkFunc() {
    const timeWork = setInterval(()=>{

        if(!pause){
            
            workInput.textContent = `${timeLeftWorkMinute.toString().length == 1 ? '0' + timeLeftWorkMinute : timeLeftWorkMinute}:${timeLeftWorkSeconde.toString().length == 1 ? '0' + timeLeftWorkSeconde : timeLeftWorkSeconde}`;
            if(timeLeftWorkMinute == 0 && timeLeftWorkSeconde == 0){
                clearInterval(timeWork);
                timeLeftSleepMinute = TIME_SLEEP_DEFAULT;
                timeLeftSleepSeconde = 0;
                timeSleepFunc();
            }
            
            if(timeLeftWorkSeconde <= 0){
                timeLeftWorkMinute--;
                timeLeftWorkSeconde = 60;
            }
            
            timeLeftWorkSeconde--;
        }
        
    
    },1000)    
}


function timeSleepFunc(){
    const timeSleep = setInterval(()=>{

        if(!pause){
            SpleepInput.textContent = `${timeLeftSleepMinute.toString().length == 1 ? '0' + timeLeftSleepMinute : timeLeftSleepMinute}:${timeLeftSleepSeconde.toString().length == 1 ? '0' + timeLeftSleepSeconde : timeLeftSleepSeconde}`;
            
            if(timeLeftSleepMinute <= 0 && timeLeftSleepSeconde <= 0){
                clearInterval(timeSleep);
                timeLeftWorkMinute = TIME_WORK_DEFAULT;
                timeLeftWorkSeconde = 0;
                cycle++;
                cycleInput.textContent = cycle; 
                console.log('oui');
                timeWorkFunc();
            }
            
            if(timeLeftSleepSeconde <= 0){
                timeLeftSleepMinute--;
                timeLeftSleepSeconde = 60;
            }
            timeLeftSleepSeconde--;
        }
        
    
    },1000,)
}
