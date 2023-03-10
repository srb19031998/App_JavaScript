async function pro(){
    let kayp=new Promise((r,nr)=>{
        nr('its not resolved')
    })
console.log( await  kayp) 
  kayp.then((s)=>{console.log(s)})
}
async function k(){}
console.log(k())
pro()