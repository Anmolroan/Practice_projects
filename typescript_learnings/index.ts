
    console.log("hello")

const myname :string = "Anmol";
const age :number =21;
const flag :boolean = false;
// const arr =[1,2];
// const arr2 =[...arr,3];
function add(x:number,y:number):number{
    return x + y
}
let output =add(1,2);

type User ={
    username:string;
    age?:number;
    isMarried:boolean;
//adding question mark means it is optional key;
}
const obj:User = {
    username:"masia",
    age:21,
    isMarried:true
}
interface Pet {
    name:string;
    age:number;
    // interface works same as type
}
interface Animal{
    hasLegs:boolean;
}
interface Pet extends Animal{
    food:string;
}
