const interval = 1000;
let s = 0, m = 0, h = 0;
let counter;

const getValues = {
    hours(){
        let hours = document.getElementById("hours");
        return hours;
    }, 
    minutes(){
        let minutes = document.getElementById("minutes");
        return minutes;
    },
    seconds(){
        let seconds = document.getElementById("seconds");
        return seconds;
    },
    startButton(){
        let start = document.querySelector(".start");
        return start;
    }
}
const Timer = {
    start(){
        counter = setInterval(()=>{
            s++
            getValues.seconds().innerHTML = s < 10? "0"+s : s;
            if(s >= 59){
                m++
                getValues.minutes().innerHTML = m < 10? "0"+m : m;
                s = 0;
            } 
            if(m >= 59){
                h++
                getValues.hours().innerHTML = h < 10? "0"+h : h;
                m = 0;
            }
        },interval);
        getValues.startButton().disabled = true;
    },
    stop(){
        clearInterval(counter);
        getValues.startButton().disabled = false;
    },
    reset(){
        clearInterval(counter);
        getValues.startButton().disabled = false;
        s = 0, m = 0, h = 0;
        getValues.seconds().innerHTML = "00";
        getValues.minutes().innerHTML = "00";
        getValues.hours().innerHTML = "00";
    }
} 
