// const res = ()=>{
//  let n1 = 10;
//  let n2 = 6;
//  return n1*n2;   
// }
// console.log(res());



// this : // it always point to the object.
// let person = {
//     naam : 'Abhishek Kumar',
//     umar:'24',
//     ug:'B.Tech',

//     greet(){
//        return `Hi, I am ${this.naam}. my qualification is : ${this.ug}`
//        ;    
//     }
// }
// console.log(person.naam);
// console.log(person.ug);
// console.log(person.greet());
// console.log(this);

 let person = {
    naam : '              Abhishek Kumar',
    umar:'24',
    ug:'B.Tech',

    greet(){
       return `Hi, I am ${this.naam}. my qualification is : ${this.ug}`
       ;    
    }
}
console.log(person.naam);
console.log(person.naam.toLowerCase().trim());


