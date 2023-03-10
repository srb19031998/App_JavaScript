let myele=document.getElementById("root")as HTMLDivElement
myele.
let sec=0
let min=0

setInterval(()=>{
  myele.innerHTML=`hours:00-minutes:${min}-seconds:${sec}`

  if(sec==10){
    min++
    sec=0
  }
  console.log(sec)
  sec++
},1000)