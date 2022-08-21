//To make the value i click show in the console
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
  
}
  
)

//document.getElementbyI