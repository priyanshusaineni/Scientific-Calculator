let op = document.getElementById("output");
function display(n) {
  op.value += n;
}
function rem() {
  op.value = "";
}
function calc() {
  try {
    op.value = eval(op.value);
  } catch (err) {
    alert("Invalid");
  }
}

function del() {
  op.value = op.value.slice(0, -1);
}

function sqrt() {
  op.value = Math.sqrt(parseInt(op.value));
}
function fact() {
  let x = parseInt(op.value);
  let f = 1;
  for (let i = 1; i <= x; i++) f = f * i;
  op.value = f;
}

function loga() {
  op.value = Math.log10(op.value);
}
function natlog() {
  op.value = Math.log(op.value);
}
function sine() {
  op.value = Math.sin(op.value);
}
function cosine() {
  op.value = Math.cos(op.value);
}
function tan() {
  op.value = Math.tan(op.value);
}
