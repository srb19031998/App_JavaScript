console.log("1")

setTimeout(()=>{
  console.log("2")
},1000)

console.log("3")


let p1=10
let p2=20
let p3
setTimeout(()=>{
    p3=30
    //console.log(p1+p2+p3)
},1000)
setTimeout(()=>{
   // p3=30
    console.log(p1+p2+p3)
},2000)
console.log(p1+p2+p3)