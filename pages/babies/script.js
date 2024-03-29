
const data = JSON.parse(localStorage.getItem('dayStarData'));

function loadData(){
let i = 0;
          data.baby.forEach((element) => {
            //console.log(element.firstName)
            document.getElementsByClassName('body')[0].insertAdjacentHTML( 'beforeend',
          `<div class="row data-row mb-1"><div class="col-1">${i + 1}</div><div class="col-6">${element.firstName} ${element.lastName}</div><div class="col-4">${element.dataOfBirth} <a type="button" id="details" class=" ms-5" data-bs-toggle="modal" data-bs-target="#modalId" onclick="loadModal()" > --details</a></div></div>`);
          i += 1;     
        });
 }
 
 loadData();

function loadModal(){
    const position = Number(window.event.target.parentNode.parentNode.childNodes[0].innerText) - 1;
          document.getElementById('modalTitleId').innerHTML = `${data.baby[position].firstName} ${data.baby[position].lastName}`;
          document.getElementsByClassName('parent')[0].innerHTML = (` ${data.baby[position].parent[0].firstName} ${data.baby[position].parent[0].lastName}`);
          document.getElementsByClassName('parent')[1].innerHTML = (` ${data.baby[position].parent[0].contact}`);
          document.getElementsByClassName('parent')[2].innerHTML = (` ${data.baby[position].parent[0].address}`);
          document.getElementsByClassName('parent')[3].innerHTML = (` ${data.baby[position].parent[0].occupation}`);
}