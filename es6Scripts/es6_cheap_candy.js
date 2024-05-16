let cart = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Giant Chewy Nerds", price: 6.00},
    {product: "Snickers Bar", price: 1.89},
    {product: "Mounds Bar", price: 1.50},
    {product: "Sour Patch Kids", price: 3.79},
    {product: "Everlasting Gobstopper", price: .99},
    {product: "Ring Pop", price: 1.79}
 ]

 // Which candies costs less than $4.00?
 let candiesLessThanFour = cart.filter((candySearch) =>{
    if(candySearch.price < 4){
        // console.log(candySearch.product)
        return true

    }else{
        return false
    }
 })

 // Which candies has "M&M" its name?
 let candies = cart.filter((candySearch) =>{
    if(candySearch.product.indexOf('M&M') !== -1){
        // console.log(candySearch.product)
        return true

    }else{
        return false
    }
 })
 // Do we carry "Swedish Fish"?
 let SwedishFish = cart.find((candySearch) =>{
    if(candySearch.product.indexOf("Swedish Fish") !== -1){
        
        return true

    }else{
        return false
    }
 })
 console.log(SwedishFish)