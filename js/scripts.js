// User Interface Logic
window.onload = function() {
  // start of click event handler for prime numbers
  document.querySelector("button#prime").onclick = function() {
    // clearing the backgroundColor for commposite numbers
    document.getElementById("n4").style.backgroundColor = null;
    document.getElementById("n6").style.backgroundColor = null;
    document.getElementById("n8").style.backgroundColor = null;
    document.getElementById("n9").style.backgroundColor = null;
    document.getElementById("n10").style.backgroundColor = null;
    // setting the backgroundColor for prime numbers
    document.getElementById("n2").style.backgroundColor = "aqua";
    document.getElementById("n3").style.backgroundColor = "aqua";
    document.getElementById("n5").style.backgroundColor = "aqua";
    document.getElementById("n7").style.backgroundColor = "aqua";
  };

  // start of click event handler for composite numbers
  document.querySelector("button#composite").onclick = function() {
    // clearing the backgroundColor for prime numbers
    document.getElementById("n2").style.backgroundColor = null;
    document.getElementById("n3").style.backgroundColor = null;
    document.getElementById("n5").style.backgroundColor = null;
    document.getElementById("n7").style.backgroundColor = null;
    // setting the backgroundColor for composite numbers
    document.getElementById("n4").style.backgroundColor = "yellow";
    document.getElementById("n6").style.backgroundColor = "yellow";
    document.getElementById("n8").style.backgroundColor = "yellow";
    document.getElementById("n9").style.backgroundColor = "yellow";
    document.getElementById("n10").style.backgroundColor = "yellow";
  };
};
