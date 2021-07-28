var getLondonTime = function(){
    document.getElementById("londonTime").innerHTML=new Date().toLocaleDateString(
        "en-US",{timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h24'}
    );
}
getLondonTime();
setInterval(getLondonTime,1000);