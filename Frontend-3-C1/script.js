//======================>>>>FrontEnd-3 Contest-1<<<<=========================//

fetch("https://dummyjson.com/products") //=================>>>> Fetching the data from the link
    .then(response => response.json()) //==================>>>> Only Returning the data
    .then((data) => {
        let cardContainer = document.getElementById('productContainer')

        let CardData = data.products
        let x = 0;
 
        //>>>>>>> Mapping the data to display every element in the data <<<<<<<<<<<//
        CardData.map(() => {

            let card = document.createElement('div')            //======>>>> card div for displaying everything about ht Product
            let cardTop = document.createElement('div')         //======>>>> top div of card for displaying the image of the product
            let cardBottom = document.createElement('div')      //======>>>> bottom div of card for displaying the details of the product
            let cardPrdtImage = document.createElement('img')   //======>>>> conatins the image of the product
            let cardPrdtNames = document.createElement('div')   //======>>>> contains title and name of the brand
            let cardPrdtTitle = document.createElement('p')     //======>>>> will display title of the product
            let cardPrdtBrand = document.createElement('p')     //======>>>> will display brand of the product
            let cardPrdtPrice = document.createElement('p')     //======>>>> will display price of the product
            let cardPrdtRating = document.createElement('p')    //======>>>> will display rating of the product
            let cardPrdtStock = document.createElement('p')     //======>>>> will display stock of the product
            let cardPrdtDiscount = document.createElement('p')  //======>>>> will display discountPrice of the product

//===================>>>>>>>>>> Adding classes to every Element <<<<<<<<<<<================================//          
            
            card.classList.add("card")
            card.id = "Card"
            cardTop.classList.add("top")
            cardTop.id = "Top"
            cardPrdtImage.classList.add("product_img")
            cardPrdtImage.id = "productImage"
            cardBottom.classList.add("bottom")
            cardBottom.id = "Btm"
            cardPrdtNames.classList.add("product_names")
            cardPrdtNames.id = "prdtName"
            cardPrdtTitle.classList.add("title")
            cardPrdtTitle.id = "Title"
            cardPrdtBrand.classList.add("brand")
            cardPrdtBrand.id = "Brand"
            cardPrdtPrice.classList.add("price")
            cardPrdtPrice.id = "Price"
            cardPrdtRating.classList.add("rating")
            cardPrdtRating.id = "Rating"
            cardPrdtStock.classList.add("stock")
            cardPrdtStock.id = "Stock"
            cardPrdtDiscount.classList.add("discount")
            cardPrdtDiscount.id =  "Discount"

//==================>>>>>>>>>>> Displaying the contents of Product <<<<<<<<<<<=============================//
            cardPrdtImage.src = CardData[x].images[0] //==============>>>>>>Image source
            cardPrdtTitle.innerText = CardData[x].title //==============>>>>>>Product Title
            cardPrdtBrand.innerText = CardData[x].brand //==============>>>>>>Product Brand
            cardPrdtPrice.innerText = "$"+CardData[x].price //==============>>>>>>Product Price
            cardPrdtRating.innerText = "Rating: " + CardData[x].rating //==============>>>>>> Product Rating
            cardPrdtStock.innerText = "Stock: " + CardData[x].stock //==============>>>>>> Remaining Stock
            cardPrdtDiscount.innerText = CardData[x].discountPercentage + "%" //==============>>>>>> Discount Price of the product

//===================>>>>>>>>>> Appending everything respective to their div <<<<<<<<<<<==================//
            cardPrdtNames.appendChild(cardPrdtTitle) 
            cardPrdtNames.appendChild(cardPrdtBrand)

            cardBottom.appendChild(cardPrdtNames) 
            cardBottom.appendChild(cardPrdtPrice) 
            cardBottom.appendChild(cardPrdtRating) 
            cardBottom.appendChild(cardPrdtStock) 
            cardBottom.appendChild(cardPrdtDiscount)

            cardTop.appendChild(cardPrdtImage) 

            card.appendChild(cardTop)
            card.appendChild(cardBottom) 

            cardContainer.appendChild(card)
            x++;
        })
    })
    .catch(()=>{
        console.log("The Data is missing");
    })