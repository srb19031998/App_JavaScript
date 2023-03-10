let w1="apple"
let e2="banana"
let g3="cat"
console.log(w1,e2)

let fruits=['banana', 'apple','Sapota','pappaya']
console.log(fruits)
console.log(fruits[3])

fruits.map((a)=>{console.log("advance map",a)})

let myitems=[
  {a:'apple', b:'banana', c:'cat'},
  {a:'apple', b:'banana', c:'cat'},
  {a:'apple', b:'banana', c:'cat', d:'dog'} 
]

let val=myitems.find((item)=>{return item.c=='cat'})
console.log(val)