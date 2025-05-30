function outer() {
  const msg = "Hello There this is a closure!";
  
  function inner() {
    console.log(msg);  
  }
  
  return inner;  
}
 
const printMsg = outer();  
printMsg();  