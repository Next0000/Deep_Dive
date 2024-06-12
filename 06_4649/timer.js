let seconds;
let minutes;
let count = 20000;
let intervalId;
let fadeClass;
var time;

//timer処理
function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (count > 0) {
        count-=1000;

        //分に変換
        minutes = Math.floor(count / 1000 / 60 % 60);
        //秒に変換
        seconds = Math.floor(count / 1000 % 60);
    }
    else{
        clearInterval(intervalId);
        reject_click();
    }

    if(count <= 10000){
        document.getElementById("timer").style.color = "red";
    }

    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    time = `${formattedMinutes}:${formattedSeconds}`;
    document.getElementById("timer").innerText = time;
}

//拒否・応答・時間処理
document.getElementById("Reject").addEventListener("click", reject_click);
document.getElementById("Response").addEventListener("click", response_click);
document.getElementById("clause").addEventListener("click", button_click);
function reject_click(){
    clearInterval(intervalId);
    document.getElementById("reject_id").insertAdjacentText('afterbegin', time + '拒否');
    document.getElementById("result_id").style.display = "block";
    document.getElementById("call_id").style.display = "none";
}
function response_click(){
    clearInterval(intervalId);
    document.getElementById("reject_id").insertAdjacentText('afterbegin', time + '応答');
    document.getElementById("result_id").style.display = "block";
    document.getElementById("call_id").style.display = "none";
}
function button_click(){
    document.getElementById("result_id").style.display = "none";
}


//着信表示処理
//→電話かけるまでの時間を調整
function firstscript() {
    fadeClass = setInterval(Phone, 10000);
}
function Phone(){
    document.getElementById("call_id").style.display = "block";
    startTimer()
    clearInterval(fadeClass);
 }
// ページの読み込み完了と同時に実行されるよう指定
window.onload = firstscript;

