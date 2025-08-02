describe('LETCONST',()=>{
    let Assignment="Declaring the Let variable";
    it("Using the Let vaiable",()=>{
         Assignment="Changing the Declared Let variable";
        cy.log(Assignment);
    })
})
describe('CONSTChanging',()=>{
    const Assignment="Declaring the const variable";
    it.skip("Using the const vaiable",()=>{
         Assignment="Changing the Declared const variable";
        cy.log(Assignment);
    })
})
//Received this Error for  :Assignment to constant variable. 


// Create an array of 5 numbers and sum them using a loop
describe('For Loop to Sum of the Array',()=>{
  const arr = [11,22,33,44,55,66];
  let arr1=0;
  it.only('Sum of the Array',()=>{
  for(let i=0;i<=arr[i];i++){
    arr1=arr1+arr[i];
    }
  cy.log(arr1);
})
})

//Write a function that returns "Even" or "Odd" for a number.

describe('Even or Odd',()=>{
  it.only('Even or Odd',()=>{
  for(let i=1;i<=10;i++){
    if (i%2 == 0){
    cy.log("Even Number"+i);
    }
    else{
        cy.log("Odd Number"+i);
    }
}
 
})
})

//1. Loop through numbers 1–10 and print only even numbers.

describe('print only even numbers',()=>{
  it.only('print only even numbers',()=>{
    let i=0;
  while(i<=10){
    if(i%2 ==0){
        cy.log("Even Numbers"+ i);
    }
    i++;
}
 
})
})