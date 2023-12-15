/*
    Write a function that returns a promise that resolves after n seconds have passed,
    where n is passed as an argument to the function.
*/

function wait(n) {
  console.log("Before promise resolved " + Date.now());

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved " + Date.now());
    }, n * 1000);
    // setTimeout(resolve("Promise resolved " + Date.now()), n * 1000);
  });
}

wait(10).then((message) => {
  console.log(message);
});
