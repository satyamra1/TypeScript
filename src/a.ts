// let abc:String ="satyam";
// console.log(abc);

//tuple

// let tup:[number,string,number]= [7,"satyam",21];

// function maverick(lang:string):number{
//     console.log(lang);
//     return 7
// }
// maverick("English")

function greet():string{
  
    return "Hello from Satyam"
}
function bada(fn:()=>void):boolean {
    setTimeout(function(){
        greet()

    },2000)
    return true;
}
