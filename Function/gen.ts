function* iceCream(){
  yield "count 1 icecream"
  yield "count 2 icecream"
  yield "count 3 icecream"
}
var shivananad=iceCream()
console.log("person 1",shivananad.next())
console.log("person 1",shivananad.next())
console.log("person 1",shivananad.next())
console.log("person 1",shivananad.next())
console.log("person 2",iceCream().next())
console.log("person 3",iceCream().next())