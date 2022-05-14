export default function running_late(date){

    var expectedTime = ("10:00:00");

    if(date > expectedTime){
        console.log("It is late!");
    }
    else{
        console.log("It is still early!");
    }
}

