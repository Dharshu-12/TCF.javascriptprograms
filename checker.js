<!DOCTYPE html>
<html>
<head>
  <title>Palindrome Checker</title>
</head>
<body>
  <h2>Palindrome Checker</h2>
  <input id="text" placeholder="Enter text">
  <button onclick="checkPalindrome()">Check</button>
  <p id="result"></p>

  <script>
    function checkPalindrome() {
      let str = document.getElementById("text").value.toLowerCase().replace(/[^a-z0-9]/g, '');
      let reversed = str.split('').reverse().join('');
      document.getElementById("result").innerText = 
        (str === reversed) ? "✅ Palindrome" : "❌ Not Palindrome";
    }
  </script>
</body>
</html>
