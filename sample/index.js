// created to handel application flow , where they can pause and resume again

function* createId(start = 0, end = 10) {
  while (start < end) {
    start++;
    yield start; // return and halt
  }
  // halt and resume loop
}

// run a gen ==> object of gen
let idCreator = createId(1000, 1010);

console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());
/// 100 line code
console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());
console.log(idCreator.next());

let createAdminId = createId(200, 210);
console.log(createAdminId.next()); // {value,done}
