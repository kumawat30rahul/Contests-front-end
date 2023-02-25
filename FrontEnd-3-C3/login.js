let userData = JSON.parse(localStorage.getItem('userData'));
console.log(userData);

let currentUser = {
    name: "",
    email: "",
    password: "",
    randomstring: ""
}
let loginBtn = document.getElementById('logIn')
    loginBtn.addEventListener("click",() => {
    
    let loginEmail = document.getElementById('emailAddress').value
    let loginPassword = document.getElementById('password').value

    userData.forEach((user,index) => {
        if(loginEmail === user.email && loginPassword === user.password){
            window.location.href = "dashboard.html"
            alert("Login Success")
            let uniqueString = randomStringGenerator()
            // userData[index].randomString = uniqueString
            currentUser["name"] = userData[index].name
            currentUser["email"] = userData[index].email
            currentUser["password"] = userData[index].password
            currentUser["randomstring"] = uniqueString
            localStorage.setItem('currentUser',JSON.stringify(currentUser))
            // localStorage.setItem('uniqueString', uniqueString)
        }else{
            if(loginEmail === "" && loginPassword === ""){
                alert("Please provide valid email and password!")
            }else if(loginEmail !== user.email){
                alert("Incorrect Email!")
            }else if(loginPassword !== user.password){
                alert("Incorrect Password!")
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