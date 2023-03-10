let add=(val1:any, val2:any)=>{
  return val1+val2
}


function calculator(arth:any){
  let val1=(document.getElementById("val1")as HTMLInputElement).value
  let val2=(document.getElementById("val2")as HTMLInputElement).value
  let showtotal=document.getElementById("total")as HTMLHeadElement

  if(arth=="+"){
    let a:number=parseInt(val1)
    let b:number=parseInt(val2)
    return showtotal.innerHTML=add(a,b)
  }
  console.log(calculator("-"))
  
}