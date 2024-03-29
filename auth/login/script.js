
const form = document.getElementById("login");

form.addEventListener("submit", logIn);

//load data

function logIn(e) {
   e.preventDefault();

   console.log('processing log in now');

   fetch('../../assets/database/dumyData.json')
      .then((response) => response.json())
      .then((json) => {
         console.log(json);
         if (document.getElementsByClassName("form-control")[0].value === json.login.admin[0].username && document.getElementsByClassName("form-control")[1].value === json.login.admin[0].pwd) {
            window.location.replace("../.././pages/admin/dashboard/admin-dashboard.html")
         } else {
            document.getElementsByClassName("feedback")[0].innerHTML = "<b>Email or Password incorect !</b>";
            document.getElementsByClassName("form-control")[0].setAttribute("class", "form-control is-invalid");
            document.getElementsByClassName("form-control")[1].setAttribute("class", "form-control is-invalid");
         }
      }
      )
   //retrieve
   //const profileData = JSON.parse(localStorage.getItem("cartProfile"));

   //console.log(profileData);

}


fetch('../../assets/database/dumyData.json')
.then((response) => response.json())
.then((json) => {
  if(localStorage.getItem('dayStarData') != null){
      localStorage.removeItem('dayStarData')
      localStorage.setItem('dayStarData', JSON.stringify(json));
  }else{
      localStorage.setItem('dayStarData',JSON.stringify(json))
  }
})