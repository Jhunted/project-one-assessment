
var counter;
var display = document.querySelector('h1');
var input = document.querySelector('input');
document.getElementById('+btn').addEventListener('click', increase);
document.getElementById('-btn').addEventListener('click', decrease);

init();

function init() 
{
  counter = 0;
  input.value = 0;
  render();
}

function increase() 
{
  counter += parseInt(input.value);
  render();
}

function decrease() 
{
  counter -= parseInt(input.value);
  render();
}

function render() 
{
    display.textContent = counter;
    if (counter < 0) {
    counter.color = 'red';
}
}