/*console.log(10%4); // a%B >> it is gonna divide a to b aand tell us the reminder 
if(10==1)   // if(condition) {------} , if only gonna works if the condition met.
     {
console.log("the condotion mets so it is gonna work!")
} */
/*let result = []; // it is empty beceuse  i will push some data!
for(let c=0; c<=9; c++)
{
    let number = 26*10+c;
    if(number%2==0)
    {
        result.push(c)
    }
    console.log(result);
}
console.log("final result: " + result); */


let myProduct = [12312,123123,123,12312,3,123,12,3,12,312,3,12,312,312,3,12,3,123,12,3,12,312,3,12,3,234,345,4,55,6,567,67,8];

// conditional stats 
/*if(condition1) // it is gonna works only if the condition is met! >> true 
    {
       // code blocks
    }
else if(condition2)
{
    // codes >> instruction 
}
else if(condition3)
{
    // codes 
}
else 
{
    // do this if any condotion does not met!
} */
// && >> and 
// || >> or 
// !! >> not  >> true >> false and false >> true 

// mode opretion  a%B >> it is gonna divide a to b aand tell us the reminder 
/*
 let ahmadScore = 50;
 let number1= 10;

if (ahmadScore >=90 && ahmadScore<= 100) // <=90ahmadScore<=100  >> 90<=90>-100
{
    console.log("Ahmad note: AA++");
}
 else if (number1 %2 ==0 && number1 % 5 == 1)
{
    console.log("the condition is met: 2");
}
else 
{
   console.log("You fialed the class! ") 
}

*/
// 1. odd 
// 2. even 
// positive  unmner should entered!


function oddAndEven  (num) // num >> parametre >> automaticlly difine a varible for us.
{
   
    if(num%2 == 0) {
    
    
    console.log(num + ":number is even.");
    
    
    }
    else
    {
        console.log(num + ":number is odd.");
    
    }
}
oddAndEven(98);
oddAndEven(97);
oddAndEven(56);
oddAndEven(31);

function findDvalue () 
{
    
let result = []; // it is empty beceuse  i will push some data!
for(let d=0; d<=9; d++)
{
    let number = 26*10+d;
    if(number%2==0)  // == >> equal , !== not equal 
    {
        result.push(d)
        console.log(result);
    }
    
}
console.log("final result: " + result);
}
findDvalue();

