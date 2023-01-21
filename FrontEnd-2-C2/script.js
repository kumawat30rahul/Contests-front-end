let Name = document.getElementById('name')
let Profession = document.getElementById('profession')
let Age = document.getElementById('age')
let AddingUser = document.getElementById('addUsers')
let message = document.getElementById('message')
let zeroMssg = document.getElementById('zeroEmployee')


message.style.display = "none";

AddingUser.addEventListener('click', errorMessage);


const employees = []
let seriolNumber = 0

function errorMessage(e){
    e.preventDefault()
    message.style.display = "block"
    

    if(Name.value == "" || Profession.value == "" || Age.value == ""){
        message.style.color = "red"
        message.innerText = "Error: Please make sure that all the fields are filled before adding in an employee!"
    }else{
        seriolNumber++
        message.style.color = "green"
        message.innerText = "Success: Employee Added!"
        
        let user = {
            id: seriolNumber,
            name: Name.value,
            profession: Profession.value,
            age: Age.value
        }

        employees.push(user)

        if(employees.length > 0){
            zeroMssg.style.display = "none"
    
        }
        

        map(user)
        
        Name.value = ""
        Profession.value = ""
        Age.value = ""
        
    }
    
}

function map(user){
    
    employees.map(employee => {

        if(employee.id === user.id){
            let listBody = document.getElementById('tableBody-list')

        let tr = document.createElement('tr')
        tr.id = "employees"

        let id = document.createElement('td')
        id.innerText = seriolNumber
        id.id = "number"
        tr.appendChild(id)

        let name = document.createElement('td')
        name.innerText ="Name: " + employee.name
        tr.appendChild(name)

        let profession = document.createElement('td')
        profession.innerText = "Profession: " + employee.profession
        tr.appendChild(profession)

        let age = document.createElement('td')
        age.innerText = "Age: " + employee.age
        tr.appendChild(age)

        let icon = document.createElement('td')
        icon.innerHTML = '<i class="bi bi-trash"></i>'
        tr.appendChild(icon)
        
        icon.addEventListener('mouseenter',function(){
            icon.classList.add("hover")
        }) 
        icon.addEventListener('mouseleave',function(){
            icon.classList.remove("hover")
        })

        icon.addEventListener('click',function(){

            tr.remove()
            
            employees.splice(employees.indexOf(employee),1)
            seriolNumber--;
            render()
            
            if(employees.length == 0){
                zeroMssg.style.display = "block"
        
            }
            
        })

        listBody.appendChild(tr)
        }
        
        
    })

}


function render(){
   
    let newId = document.querySelectorAll("#number")
    
    employees.map((employee,index) => {
        for(let navinId of newId){
            navinId.innerText = index + 1;
        }
    })
}