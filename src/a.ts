// let abc:String ="satyam";
// console.log(abc);

//tuple

// let tup:[number,string,number]= [7,"satyam",21];

// function maverick(lang:string):number{
//     console.log(lang);
//     return 7
// }
// maverick("English")

// function greet():string{
  
//     return "Hello from Satyam"
// }
// function bada(fn:()=>void):boolean {
//     setTimeout(function(){
//         greet()

//     },2000)
//     return true;
// }

// Function with arguments 

// let user = {
//     name:"satyam",
//     age:21,
//     isMale:true,
//     email:"sat@gmail.com",
//     password:123
// }

// How you use function without interface
// function checkAge(user:{
//     name:String,
//     age:number,
//     isMale:boolean,
//     email:String,
//     password:number
// }){
//     if(user.age>=18){
//         console.log("Allowed");
//     }else{
//         console.log("Not Allowed");
//     }

// }

// with interface

// interface User{
//     name:String,
//     age:number,
//     isMale:boolean,
//     email:String,
//     password:number
// }

// Optional chaining:-

// interface User{
//     name:String,
//     age:number,
//     isMale?:boolean,  //optional chaining
//     email?:String,   // optional chaining
//     password:number
// }



// function checkAge(user:User){
//     if(user.age>=18){
//         console.log("Allowed");
//     }else{
//         console.log("Not Allowed");
//     }
// }




// checkAge(user)


// Class in TS 

// In typescrip we have to define properties before creating constructor


// interface Person{
//     name:string,
//     age:number,
//     greet(phrase:string):void
// }
// class Student implements Person{
//     // this is for key
//     name : string;
//     age : number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age =age;

//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// let s1 =new Student("Satyam",21)
// s1.greet("hello from")


//Type in TS

// type Sat = number | string

// function sat(abc:Sat){

// }

// type WebDevelopment = {
//     mentor : string,
//     project : number
// }

// type DSA = {
//     problem : number,
//     complexity: string
// }

// type satyam = WebDevelopment | DSA 


// Array in TS

// let arr =[10,12,13,30];
// function looping(arr:number[]):void{
//     for(let item of arr){
//         console.log(item);
//     }
    
// }
// looping(arr)

// Array of Object 

let arr = [{name:"satyam",age:21},{name:"rai",age:22}];

interface User {
    name:string;
    age:number;
}
function looping(arr:User[]){
    for(let item of arr){
        console.log(item);
    }
    
}
looping(arr)