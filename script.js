function XXX() {
  const input1 = document.querySelector("#color1");
  const input2 = document.querySelector("#color2");
  document.body.style.background = `linear-gradient(45deg, ${input1.value}, ${input2.value})`;
}
