
const data = JSON.parse(localStorage.getItem('dayStarData'));

function loadData(){
    let i = 0;
              data.staff.forEach((element) => {
                //console.log(element.firstName)
                document.getElementsByClassName('body')[0].insertAdjacentHTML( 'beforeend',
              `<div class="row data-row mb-1"><div class="col-1">${i + 1}</div><div class="col-6">${element.firstName} ${element.lastName}</div><div class="col-4">${element.dateOfBirth} </div></div>`);
              i += 1;     
            });
           }
     
     loadData();
    