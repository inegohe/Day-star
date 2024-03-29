
const data = JSON.parse(localStorage.getItem('dayStarData'));

function loadData(){
  document.getElementsByClassName('registered')[0].innerHTML = `<h2>${data.baby.length}</h2>`;
  document.getElementsByClassName('sitters')[0].innerHTML = `<h2>${data.staff.length}</h2>`;
}

loadData();

