function sum(a,b){
    return a+b
}

function max(a,b){
    if(a>b){
        return a
    }
    return b
}

//exporting
module.exports={
    sum: sum, 
    max: max

}