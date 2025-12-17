// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

//1)
myTodo.push({
  id: 5, todo:"Walk the dog"
})

//2)
myTodo[3].todo = "Go to the gym"


//3)
console.log(myTodo);

//4)
console.log(`To-do id: ${myTodo[4].id} , ${myTodo[4].todo}`)
