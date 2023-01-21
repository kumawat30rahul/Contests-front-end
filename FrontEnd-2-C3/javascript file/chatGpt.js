// retrieving data from login page for uniques code
let uniqueString = sessionStorage.getItem("uniqueString")
let newUserData = JSON.parse(sessionStorage.getItem('newUserData'));
// displaying the unique code
let code = document.getElementById('uniqueCodeSpan');
code.innerText = uniqueString 
code.style.color = "blue"


// array of question and answers
let chatArray = [
    {question:"Who is virat kholi" , answer: "Virat kholi is the King of cricket", imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg"},
    {question:"Who is Rohit Sharma" , answer: "Captain of indian cricket team", imgLink:"https://images.indianexpress.com/2023/01/Rohit-Sharma-8.jpg"},
    {question:"Who is CR7" , answer: "Greatest Of All Time", imgLink:"https://i.pinimg.com/474x/02/3e/eb/023eebc4bcee84dda420da10d3fe1c91.jpg"},
    {question:"Who is Steph Curry" , answer: "Steph Curry is basketball cook", imgLink:"https://i.pinimg.com/originals/55/d6/a6/55d6a6da9d3bc8661b7bef6dfb13f16b.jpg"},
    {question:"Who are you" , answer: "You are you", imgLink:"https://m.media-amazon.com/images/I/71P7FCWEg-L._SY355_.jpg"}
]


// adding functionaltiy for asking question
let questionBtn = document.getElementById('qBtn')
questionBtn.addEventListener("click",() => {
    let question = document.getElementById('question').value
    let answerOfQ = document.getElementById('answerDisplay')
    let image = document.getElementById('answerImg')
    let speechDiv = document.getElementById('speachText')
    chatArray.forEach(arr => {
        if(question === arr.question){
            answerOfQ.innerText = arr.answer
            image.src = arr.imgLink
            speechDiv.style.visibility = 'visible'
        }
    })
})


let speakTextBtn = document.getElementById('speakText')
let userDetails = document.getElementById('userDetails')
let x = 10
speakTextBtn.addEventListener("click",() => {
    x--;
    let speakInput = document.getElementById('tokenInput').value
    let userName = document.getElementById('userName')
    let callsRem = document.getElementById('userCalls')
    let answerTextContent = document.getElementById('answerDisplay')
    if(speakInput === uniqueString){
        userDetails.style.visibility = 'visible'
        newUserData.forEach(user => {
            if(speakInput === user.randomString){
                userName.innerText = user.name
                if(x>=0){
                    callsRem.innerText = x
                }else{
                    callsRem.innerText = "You have no text to speak calls left"
                }

                if(x>0){
                    let utterance = new SpeechSynthesisUtterance(answerTextContent.textContent);
                    window.speechSynthesis.speak(utterance);
                }
            }
        })
    }else{
        userDetails.style.visibility = 'visible'
        userName.innerText = "Invalid Token"
        userName.style.color = "red"
        callsRem.innerText = "0"
    }
    
})