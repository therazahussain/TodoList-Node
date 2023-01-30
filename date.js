exports.getDate = function() {
    let today = new Date();
    let object = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'   
    };

    return today.toLocaleString("en-US",object);
}

exports.getDay = function (){
    let today = new Date();
    let object = {
        weekday: 'long'  
    };

    return today.toLocaleString("en-US",object);
}