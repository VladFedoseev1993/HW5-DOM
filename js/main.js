document.querySelector('button').onclick = myClick;

function myClick() {
    let i = document.querySelector('.user').value;
    let b = document.querySelector('.user-o').value;
    console.log(i);
    console.log(b);
    document.querySelector('.out').innerHTML = i;
    document.querySelector('.out-o').innerHTML = b;
    localStorage.setItem(i, 'number-1');
    localStorage.setItem(b, 'number-2');
}
