function DigitalTime(){
  let DigitalTime=new Date()
  let hours=DigitalTime.getHours()
  let seconds=DigitalTime.getSeconds()
  let minutes=DigitalTime.getMinutes()
  let session=document.getElementById("sess");


  document.getElementById('hour').innerHTML=hours;
  document.getElementById('sec').innerHTML=seconds;
  document.getElementById('min').innerHTML=minutes;

  
}
setInterval(DigitalTime, 10);