function display_time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var md = "AM";
    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours-12;
        md = "PM"; 
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("time1").innerHTML = hours + " : " + minutes + " : " + seconds + " " + md;
    document.getElementById("time2").innerHTML = hours + " : " + minutes + " : " + seconds + " " + md;
    setTimeout(display_time , 1000);
}

display_time();