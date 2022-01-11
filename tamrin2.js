function factorial() {
  var n = document.getElementById("txtNum1").value
  var f = 1
  for (var i = 1; i <= n; i++) {
    f *= i
  }
  alert(f)
  alert("recFactorial : " + recFactorial(n))
}

function recFactorial(k) {
  if (k === 0 || k === 1) {
    return 1;
  } else {
    return k * recFactorial(k - 1);
  }
}

function gcd() {
  var n = document.getElementById("txtNum2").value
  var m = document.getElementById("txtNum3").value
  alert("recGCD : " + recGCD(n, m))
  var result;
  do {
    result = n % m;
    n = m;
    m = result;
  }while (result !== 0)
  alert(n)
}

function recGCD(n, m) {
  if (n % m === 0) {
    return m;
  }
  return recGCD(m, n % m)
}

function fibonacci() {
  var n = document.getElementById("txtNum4").value
  var num1 = 0;
  var num2 = 1;
  var num3 = 0;
  //alert("recFibonacci : " + recFibonacci(n))
  for (var i = 1; i < n; i++) {
    num3 = num1 + num2
    num1 = num2
    num2 = num3
  }
  alert(num3)
}

function recFibonacci(n) {
  if (n === 1 || n === 2)
    return 1;
  else
    return recFibonacci(n - 1) + recFibonacci( n - 2)
}
