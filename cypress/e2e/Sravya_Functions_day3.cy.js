describe('functionsAss',()=>{

    it('functionAss',()=>{
     
      function logWelcome(){
       return('Welcome to Cypress Training!');
    }
     cy.log(logWelcome());
    }),
   //taking the Email from Function 
    it('FunctionExpression',()=>{
        const printUserEmail1=function(){
            return('schukka@endava.com');
        }
         cy.log(printUserEmail1());
        }),
            
//passing the Email to function
    it('FunctionExpression1',()=>{
        const printUserEmail=function(Email){
            return(Email);
         
        }
      cy.log(printUserEmail('schukka@endava.com'));
        }),

 //Arrrow function for multiplication
    it('Arrowfunctionformul',()=>{
        const multiplication =(a,b,c,d)=>{
            return(a*b*c*d);
         
        }
      cy.log(multiplication(1,2,3,4));
        }),
   //Arrrow function for multiplication using for 
    it('Arrowfunctionformul',()=>{
        let mul=1;
        const multiplication =(i)=>{
            mul=mul*i;
            return(mul); 
        }
       
        const coun=4;
        for (let i=1;i<=coun;i++){
          multiplication(i);
          }
    //cy.log(`Final multiplication result is:' ${mul}`);
    cy.log('Final multiplication result is:'+ mul);
})
        
})


