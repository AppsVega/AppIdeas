function calculate() {
  let num = document.getElementById("bin").value;
  let array_num = num.split("");
  array_num = array_num.reverse();
  let array_length = array_num.length;
  dec = 0;
  for (let cont = 0; cont < array_length; cont++) {
    dec += 2 ** cont * array_num[cont];
  }
  document.getElementById("result").innerHTML = `Result: ${dec}`;
}
