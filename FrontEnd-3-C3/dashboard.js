let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let users = JSON.parse(localStorage.getItem('userData'));
console.log(currentUser);

let currUserName = document.getElementById('userName')
let currUserEmail = document.getElementById('userEmail')

currUserName.innerText = `${currentUser.name}`
currUserEmail.innerText = `${currentUser.email}`

let passIndex = 0;

users.forEach((user,index)=>{
    if(user.name === currentUser.name && user.email === currentUser.email){
        passIndex = index
    }
})
const changeBtn = document.getElementById('changePassword')
changeBtn.addEventListener("click",()=>{
    let oldPassword = document.getElementById('oldPassword').value
    if(oldPassword === currentUser.password){
        let newPassword = document.getElementById('newPassword').value
        let confirmPassword = document.getElementById('confirmNewPassword').value
        if(newPassword === confirmPassword){
            currentUser.password = newPassword
            users[passIndex].password = newPassword
            localStorage.setItem('currentUser',JSON.stringify(currentUser))
            localStorage.setItem('userData',JSON.stringify(users))
            alert('Password Succesfully Changed')
        }else{
            alert("Password Does not match.")
        }
    }else{
        alert("Please provide your valid old password")
    }
})

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem('currentUser')
    window.location.href = "login.html"
})