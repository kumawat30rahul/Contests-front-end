
const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
const newPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

let userData = []
let signUpBtn = document.getElementById('signUp') // signup button element
let x = 0;
// function of button:
signUpBtn.addEventListener("click", () => { 

    let Name = document.getElementById('fullName').value       // name value input element
    let Email = document.getElementById('emailAddress').value   //email value input element
    let newPassword = document.getElementById('newPassword').value // new passowrd value input element
    let confirmPassword = document.getElementById('confirmPassword').value // confirm pass value input element
    let errorMessage = document.getElementById('errorMsg')                  // para element for error message

    // checking the required details for singup
    if(emailPattern.test(Email) && newPasswordPattern.test(newPassword) && newPassword !== Name && newPassword !== Email && confirmPassword === newPassword ){
        
        let user = {
            id:++x,
            name: Name,
            email: Email,
            password: newPassword
        }
        userData.push(user)
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = "login.html"
    }else{
        if(Name === "" && Email === "" && newPassword === "" && confirmPassword === "" ){
            errorMessage.innerText = "Please Provide Valid Details"
        }else if(Name === ""){
            errorMessage.innerText = "Please Provide Valid Name"
        }else if(!emailPattern.test(Email)){
            errorMessage.innerText = "Please Provide Valid Email Address"
        }else if(!newPasswordPattern.test(newPassword)){
            errorMessage.innerText = "Please Provide Valid Password"
        }else if(newPassword === Name){
            errorMessage.innerText = "Password cannot be same as name"
        }else if(newPassword === Email){
            errorMessage.innerText = "Password cannot be same as email address"
        }else if(confirmPassword !== newPassword){
            errorMessage.innerText = "Password does not match"
        }
        
    }

})


// -------------------------LOGIN PAGE JAVASCRIPT-------------------------//

// if(window.location.href.includes('login.html')){
//     console.log("login page");
//     let loginBtn = document.getElementById('loginButton')
//     loginBtn.addEventListener("click",() => {
    
//     console.log("sdfsadfsdfsadfsdf");
//     let loginEmail = document.getElementById('emailAddress').value
//     let loginPassword = document.getElementById('passWord').value
//     let loginErrorMsg = document.getElementById('errorMsg')

//     userData.forEach(user => {
//         if(loginEmail === user.email && loginPassword === user.password){
//             window.location.href = "chatGpt.html"
//         }else{
//             if(loginEmail === "" && loginPassword === ""){
//                 loginErrorMsg.innerText = "Please provide valid email and password!"
//             }else if(loginEmail !== user.email){
//                 loginErrorMsg.innerText = "Incorrect Email!"
//             }else if(loginPassword !== user.password){
//                 loginErrorMsg.innerText = "Incorrect Password!"
//             }
//         }
//     })
// })
// }
