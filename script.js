var shoutIt = function (name) {
    var shout = `Hello ${name}, nice to meet you!`.toUpperCase();
    return shout;
  };
  
  console.log(shoutIt("Anne"));
  console.log(shoutIt("Saxby"));
  console.log(shoutIt("Mabel"));
  
  var multiply = function (num1, num2) {
    if (typeof num1 !== "number") {
      return `Please provide two numbers`;
    } else if (typeof num2 !== "number") {
      return `Please provide two numbers`;
    }
    return num1 * num2;
  };
  
  console.log(multiply(3, 7));

