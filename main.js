check= 0;
play = 0;
var count

if (play == 1){
    var audio = new Audio('alarm.mp3');
    audio.play();
}

function greeting(){
    if (count == -1){
        clearInterval(stop);
        var audio = new Audio('alarm.mp3');
        audio.play();
      }  else {
        t= count
        hr= Math.floor(t/3600)
        t= t-(hr*3600)
        min= Math.floor(t/60)
        t= t-(min*60)
        sec= t
        t= t-sec
    console.log(hr)
    console.log(min)
    console.log(sec)
    document.title = hr + ":" + min + ":" + sec;
    document.getElementById("hrD").innerHTML = hr;
    document.getElementById("minD").innerHTML = min;
    document.getElementById("secD").innerHTML = sec;
    count = count-1;
      }
}

function press() {
    if (check == 1){
        document.getElementById("display").style.display = "none";
        document.getElementById("timer").style.display = "block";
        hour = Number(document.getElementById("hr").value);
        minute = Number(document.getElementById("min").value);
        second = Number(document.getElementById("sec").value);
        time = 3600*hour + 60*minute + second;
        count = time-1;
        console.log(time);
        tx= count+1
        hr= Math.floor(tx/3600)
        tx= tx-(hr*3600)
        min= Math.floor(tx/60)
        tx= tx-(min*60)
        sec= tx
        tx= tx-sec
    document.title = hr + ":" + min + ":" + sec;
    document.getElementById("hrD").innerHTML = hr;
    document.getElementById("minD").innerHTML = min;
    document.getElementById("secD").innerHTML = sec;
    let stop = setInterval(greeting, 1000)
}
}

function checky() {
 if (document.getElementById("hr").value != 0){
    document.getElementById("start").style.cursor = "grab";
    check= 1;
 } else if (document.getElementById("min").value != 0) {
    document.getElementById("start").style.cursor = "grab";
    check= 1;
 } else if (document.getElementById("sec").value != 0) {
    document.getElementById("start").style.cursor = "grab";
    check= 1;
 } else {
    document.getElementById("start").style.cursor = "not-allowed";
    check= 0;
 }
}