/*
- Old version of requisition - AJAX
var xhr = new XMLHttpRequest(); // Gave functionality ajax

xhr.open("GET", "https://api.github.com/users/edward-mn");
xhr.send(null);

xhr.onreadystatechange = function () {
  // Verify if response is successful
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText)); // Transforming JSON in Object js
  }
};
*/

// Using new library for AJAX
// promises not influenced by time code, it is runing in async way

/*
var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/edward-mn");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

Error because the promise is not finished
var result = minhaPromise();
console.log(result);

// Work with promise
minhaPromise()
  .then(function (response) {
    console.log(response);
  }) //Execute when call the resolve = sucess
  .catch(function (error) {
    console.warn(error);
  }); // Execute when call the reject = error
*/

// https://github.com/axios/axios
// Axios = wrapper for XHR request
axios
  .get("https://api.github.com/users/edward-mn")
  .then(function (response) {
    console.log(response);
  }) //Execute when call the resolve = sucess
  .catch(function (error) {
    console.warn(error);
  }); // Execute when call the reject = error
