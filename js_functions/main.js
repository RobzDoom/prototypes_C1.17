function myMessage() {
    console.log('This should be a function')
}

function add(x,y) {
    var result = x + y;
        console.log(result);
}

function add2(x,y) {
    var result = x + y;
    return result;
}

 var add2Result = add2(10,35);

function cardFlip(element) {
    $(element).hide();
}