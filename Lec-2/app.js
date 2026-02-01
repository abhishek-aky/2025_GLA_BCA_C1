// let score = 90;
// if(score>90){
//     console.log("topper log");
// }
// else{
//     console.log(`A single piece of 
//     paper can't decide my future`);
// }

// && : AND Operator
// || : OR Operator
// let supreme_court = true;
// let high_court = false;
// if(supreme_court == true || high_court == true){
//     console.log(`Chalo Goa chalte hain`);
// }
// else{
//     console.log(`Ghr pr baith ke pdh nhi skta`);
// }

// let n = 10;
// n & (n-1)



// for(let i = 1;i<=10;i = i+1){
//     console.log(i);
// }

// for(let i = 1;i<=20;i = i + 1){
//     if(i%2==0) console.log(i);
// }
// for(let i = 2;i<=20;i +=2){
//     console.log(i);
// }

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// let i = 11;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);


// function jodna(){
//     let num1 = 40;
//     let num2 = 50;
//     console.log(num1+num2);
// }
// function jodna(num1, num2){
//     let n1 = num1;
//     let n2 = num2;
//     console.log(n1+n2);
// }
// jodna(); //Non-parameterized
// jodna(10,20); //Parameterized

let res = function jodna(num1, num2, num3=50){ //Default non-parameterized
    let n1 = num1;
    let n2 = num2;
    let n3 = num3;
    console.log(n1+n2+n3);
}
jodna(45, 55);
jodna(45, 55, 80);

const value=  ()=>{
    let n1 = 65;
    let n2 = 35;
    console.log(n1+n2);
}
