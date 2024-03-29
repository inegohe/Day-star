const data = JSON.parse(localStorage.getItem('dayStarData'));

const form = document.getElementById("submit-form-baby");

console.log(data);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(form.fname.value != null && form.lname.value != null){
        data.baby.push(
            {
                firstName: form.fname.value,
                lastName: form.lname.value,
                dataOfBirth: form.dateOfbirth.value,
                age: "",
                parent: [
                    {
                        firstName: form.fatherName.value,
                        lastName: "",
                        contact: form.fatherContact.value,
                        address: "",
                        occupation: form.fatherOccupation.value
                    },
                    {
                        firstName: form.motherName.value,
                        lastName: "",
                        contact: form.motherContact.value,
                        address: "",
                        occupation: form.motherOccupation
                    }
                ]
            }
        )
    }else{
        console.log('please fill ou the names section')
    }
    localStorage.setItem('dayStarData',JSON.stringify(data));
    window.location.replace('../dashboard/admin-dashboard.html');
})