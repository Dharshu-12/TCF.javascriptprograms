<!DOCTYPE html>
<html>
<head>
  <title>Calculator</title>
  <style>
    input { width: 200px; height: 30px; text-align: right; }
    button { width: 45px; height: 45px; margin: 2px; }
  </style>
</head>
<body>
  <h2>Simple Calculator</h2>
  <input id="display" disabled><br><br>
  <div>
    <button onclick="clearDisplay()">C</button>
    <button onclick="append('/')">/</button>
    <button onclick="append('*')">*</button>
    <button onclick="append('-')">-</button><br>
    <button onclick="append('7')">7</button>
    <button onclick="append('8')">8</button>
    <button onclick="append('9')">9</button>
    <button onclick="append('+')">+</button><br>
    <button onclick="append('4')">4</button>
    <button onclick="append('5')">5</button>
    <button onclick="append('6')">6</button>
    <button onclick="calculate()">=</button><br>
    <button onclick="append('1')">1</button>
    <button onclick="append('2')">2</button>
    <button onclick="append('3')">3</button><br>
    <button onclick="append('0')">0</button>
    <button onclick="append('.')">.</button>
  </div>

  <script>
    function append(val) {
      document.getElementById("display").value += val;
    }
    function clearDisplay() {
      document.getElementById("display").value = "";
    }
    function calculate() {
      try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
      } catch {
        alert("Invalid Expression");
      }
    }
  </script>
</body>
</html>
