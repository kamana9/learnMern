console.log("conditional statement")

/* if(<condition>){
//do something
}else{
//do something
} 
*/

let willRain = false
let hasProbablity= true

if (willRain) {
    console.log("take umbrella")
} else{
    if(hasProbablity){
    console.log("donot take risk")}
    else {
        console.log("no need to take")
    }
}

if (willRain) {
    console.log("take umbrella")

} else if(hasProbablity){
    console.log("donot take risk")

}else {
        console.log("no need to take")
    }

    /* ternary operator */