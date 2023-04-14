import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './calculator.js';


function handleFormSubmission(event) {
  event.preventDefault();
  document.querySelector('#').innerText = null;
  const calculator = new Calculator();
}

window.addEventListener("load", function() {
  document.querySelector("#").addEventListener("submit", handleFormSubmission);
});