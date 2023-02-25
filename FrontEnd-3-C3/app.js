
const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
const newPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
let registerBTN = document.getElementById('REGISTER') // signup button element

let userData =  []
console.log(userData);
const currentUser = JSON.parse(localStorage.getItem('currentUser'))
console.log(currentUser);

if(currentUser){
    window.location.href = "dashboard.html"
}else{
    registerBTN.addEventListener("click", () => {
        // e.preventDefault()
        let Name = document.getElementById('fullName').value       // name value input element
        let Email = document.getElementById('emailAddress').value   //email value input element
        let newPassword = document.getElementById('password').value // new passowrd value input element
        let confirmPassword = document.getElementById('confirmPassword').value // confirm pass value input element
        // let errorMessage = document.getElementById('errorMsg')                  // para element for error message
        console.log("working");

        if (emailPattern.test(Email) && newPasswordPattern.test(newPassword) && newPassword !== Name && newPassword !== Email && confirmPassword === newPassword) {
            let user = {
                name: Name,
                email: Email,
                password: newPassword
            }
            userData.push(user)
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = "login.html"
        } else {
            if (Name === "" && Email === "" && newPassword === "" && confirmPassword === "") {
                alert("Please Provide Valid Details")
            } else if (Name === "") {
                alert("Please Provide Valid Name")
            } else if (!emailPattern.test(Email)) {
                alert("Please Provide Valid Email Address")
            } else if (!newPasswordPattern.test(newPassword)) {
                alert("Please Provide Valid Password")
            } else if (newPassword === Name) {
                alert("Password cannot be same as name")
            } else if (newPassword === Email) {
                alert("Password cannot be same as email address")
            } else if (confirmPassword !== newPassword) {
                alert("Password does not match")
            }
        }
    })
}



