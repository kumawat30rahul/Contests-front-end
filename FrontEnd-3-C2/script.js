//========== creating get menu function ==========//

let recipeCardDiv = document.getElementById('recipeList') //===>>>>accessing the div which wil contain the recipes
let recipeData; //========>>>>>>>>>>initialization to access the fetched data everywhere

function getMenu(){
    let recipeCard;
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
        .then(response => response.json())
        .then(data => {
            recipeData = data;
            let recipes = data
            recipeCard = recipes.map(recipe => {
                return `
                <div class="card" id="Card">
                    <div class="recipe_img" id="recipeImg">
                        <img src="${recipe.img}" alt="" class="image" id="IMAGE">
                    </div>
                    <div class="contents" id="CONTENTS">
                        <h2 class="name" id="NAME">${recipe.name}</h2>
                        <h3 class="price" id="PESA">Price: $${recipe.price}</h3>
                        <p class="rating" id="RATING">Rating: ${recipe.rate}</p>
                    </div>
                </div>
                `
            })
            recipeCardDiv.innerHTML = recipeCard.join("")
        })

}

window.onload = getMenu()
function takeOrder(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const orderedBurger ={}
            for(let i =0 ;i<3;i++){
                let randomNumber = Math.round(Math.random()*60)
                orderedBurger[`Burger ${i}`] = recipeData[`${randomNumber}`]
            }
            res(orderedBurger)
        },2500)
    })
}

let recipeStatus = {}
function orderPrep(){
    return new Promise((res,rej)=> {
        setTimeout(()=>{
            recipeStatus.order_status= true,
            recipeStatus.paid= false
            res(recipeStatus)
        },1500)
    })
}

function payOrder(){
    return new Promise((res,rej)=>{
        payment = true
        setTimeout(()=>{
            recipeStatus.order_status= true,
            recipeStatus.paid= true
        res(recipeStatus)
        },1000)
    })
}

function thankyouFunc(){
    if(recipeStatus["paid"] === true){
        alert("Thank you for using our service, your order is confirmed")
    }
}

takeOrder().then((burgers) => {
    orderStatus = true;
    console.log(burgers);

    orderPrep().then((status)=>{
        console.log(status);
        
        payOrder().then((newstatus)=>{
            console.log(newstatus);
            thankyouFunc();
        }).catch(() => {
            console.log("paymentFailed");
        })

    }).catch(() => {
        console.log("OrderFailed");
    })

}).catch(() => {
    console.log("Data Not recieved");
})



