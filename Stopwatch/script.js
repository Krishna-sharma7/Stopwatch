const time = document.querySelector('.time');
var hr = 0;
var min = 0;
var sec = 0;
var stoper = true;

function startTimer(){
    if(stoper==true){
        stoper = false;
        timer();
    }
}

function stopTimer(){
    if(stoper==false){
        stoper=true;
    }
}



function timer(){
    if(stoper == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
         hr++;
        min=0;
        sec=0;
        }
        if(sec<10){
            sec = "0" +sec;
        }
        if(min<10){
            min = "0" +min;
        }
        if(hr<10){
            hr = "0" + hr;
        }
        
        time.innerHTML=`${hr}:${min}:${sec}`;

        setTimeout("timer()",1000);
    }
}
function restartTimer(){
    time.innerHTML='00:00:00';
    hr = 0;
    min = 0;
    sec=0;
    stoper=true;
}