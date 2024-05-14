function isOver60(arrayValue) {
    if (arrayValue > 60) {
    return true;
    }
    else {
    return false;
    }
    }
   
    let numArray = [1,200,20,121,35]
    let over60 = numArray.find(isOver60)
    console.log(over60)