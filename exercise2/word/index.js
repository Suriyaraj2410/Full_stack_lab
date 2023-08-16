

document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const str = document.getElementById("input").value;
  document.getElementById("3").value = exclusion(str);
  document.getElementById("2").value = strength(str);
  document.getElementById("1").value = emphase(str);
});

function exclusion(str) {
    return "plus"+str
}
function strength(str) {
    return "doubleplus"+str
}
function emphase(str) {
    return "un"+str
}