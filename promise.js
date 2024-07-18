let promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Task Completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});
//--
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Task second completed`);
    resolve();
  }, 1000);
}).then(() => console.log(`second promise consumed`));
//--
let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Aman", email: "aman@k.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});
//--
let promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Naman", email: "naman@k.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    let data = { userName: user.userName, email: user.email };
    return data;
  })
  .then((data) => {
    console.log(data.userName);
    console.log(data.email);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
//--
let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Max", email: "Max@d.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
async function getPromiseFive() {
  try {
    let response = await promiseFive;
    console.log(response);
    console.log(response.userName);
    console.log(response.email);
  } catch (error) {
    console.log(error);
  }
}
getPromiseFive();

//fetch--
//by async and await
async function getData() {
  try {
    let response = await fetch("https://api.github.com/users/AdityaSinghWeb");
    let data = await response.json();
    console.log(data);
    console.log(data.login);
  } catch (error) {
    console.log(error);
  }
}
getData();

//by promises
fetch("https://api.github.com/users/AdityaSinghWeb")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.id);
  })
  .catch((error) => console.log("ERROR: ", error))
  .finally(() => console.log("The promise is either resolved or rejected"));
