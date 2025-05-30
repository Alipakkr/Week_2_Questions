function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Fetching the Data Successfully!");
      } else {
        reject("Server is giving error occurred.");
      }
    }, 1000);
  });
}

async function fetchdatafun() {
  try {
    const result = await fetchData();
    console.log("Fetching the Data Successfully!", result);
  } catch (error) {
    console.log("Error in fetching Data:", error);
  }
}

fetchdatafun();
