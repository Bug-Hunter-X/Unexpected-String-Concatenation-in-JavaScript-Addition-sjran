function foo(a, b) {
  //Convert the second argument to a number before performing addition
  return a + parseFloat(b);
}
console.log(foo(10, "20")); // Expected numerical addition result