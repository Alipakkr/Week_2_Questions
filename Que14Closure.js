function createfunlist() {
  let functions = [];
  
  for (let i = 0; i < 5; i++) { 
    functions.push(function() {
      console.log("Index:", i);
    });
  }
  
  return functions;
}

const functionList = createfunlist();
functionList[0]();  // index 0
functionList[1]();  // index 1
functionList[2]();  // index 2
functionList[3]();  //index 3
functionList[4]();  // index 4