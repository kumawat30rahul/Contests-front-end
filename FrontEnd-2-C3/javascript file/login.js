let userData = JSON.parse(sessionStorage.getItem('userData'));
console.log(userData);

let loginBtn = document.getElementById('loginButton')
    loginBtn.addEventListener("click",() => {
    
    let loginEmail = document.getElementById('emailAddress').value
    let loginPassword = document.getElementById('passWord').value
    let loginErrorMsg = document.getElementById('errorMsg')

    userData.forEach((user,index) => {
        if(loginEmail === user.email && loginPassword === user.password){
            window.location.href = "chatGpt.html"
            loginErrorMsg.innerText = "Login Success"
            loginErrorMsg.style.color = 'green'
            let uniqueString = randomStringGenerator()
            userData[index].randomString = uniqueString
            let newUserData = userData
            sessionStorage.setItem('newUserData',JSON.stringify(newUserData))
            sessionStorage.setItem('uniqueString', uniqueString)
        }else{
            if(loginEmail === "" && loginPassword === ""){
                loginErrorMsg.innerText = "Please provide valid email and password!"
            }else if(loginEmail !== user.email){
                loginErrorMsg.innerText = "Incorrect Email!"
            }else if(loginPassword !== user.password){
                loginErrorMsg.innerText = "Incorrect Password!"
            }
        }
    })
})


function randomStringGenerator(){
    let uniqueString = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i = 0;i<10;i++){
        uniqueString += characters.charAt(Math.round(Math.random()*characters.length))
    }
     return uniqueString
}

