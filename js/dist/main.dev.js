"use strict";

document.querySelector('button').onclick = myClick;

function myClick() {
  var i = document.querySelector('.user').value;
  var b = document.querySelector('.user-o').value;
  console.log(i);
  console.log(b);
  document.querySelector('.out').innerHTML = i;
  document.querySelector('.out-o').innerHTML = b;
  localStorage.setItem(i, 'number-1');
  localStorage.setItem(b, 'number-2');
}