let search = document.getElementsByClassName('search');
let btn = document.getElementsByClassName('submit');
let data = [].map.call(btn, button => button.textContent);
console.log(data);

