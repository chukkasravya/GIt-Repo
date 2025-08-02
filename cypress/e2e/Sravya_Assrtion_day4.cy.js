describe('LoginForm', () => {
  const Url='https://practice.expandtesting.com/login';
  beforeEach(()=>{
    cy.visit(Url);
  });
  it('LoginForm_Happypath', () => {
    cy.get('#username').type('practice');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.url().should('include', '/secure');
    cy.get('#flash').should('be.visible', 'You logged into a secure area!');
    cy.contains('Logout').should('be.visible').and('contain', 'Logout');
    //cy.get('.button secondary radius btn btn-dangerutton').should('have.value', 'Logout')
    cy.contains('Logout').click();
    //cy.get('#core > div > div > a > i').click();
  }),
  //invalid username
  it('LoginForm_Invalid Username', () => {
    cy.get('#username').type('practicesss');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.get('#flash').should('be.visible').and('contain.text', 'Your username is invalid!');
    
  }),
  //Invalid Password
   it('LoginForm_Invalid password', () => {
    cy.get('#username').type('practice');
    cy.get('input[name="password"]').type('SuperSecretPasswordss!');
    cy.contains('button', 'Login').click();
    cy.get('.alert-danger').should('be.visible').and('contain.text', 'Your password is invalid!');
    
  })

})

describe('RegistrationForm', () => {
  const Url='https://practice.expandtesting.com/register';
  beforeEach(()=>{
    cy.visit(Url);
     });
  it('Registration_Form_Happypath', () => {
    cy.get('input[name="username"]').type('Sravyachukku2');
    cy.get('#password').type('Sravy677DE@4721');
    cy.get('#confirmPassword').type('Sravy677DE@4721');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('.alert-info').should('be.visible').and('contain', 'Successfully registered, you can log in now.');
    }),
   it('Registration_Form_passwordnotmatch', () => {
    cy.get('input[name="username"]').type('Sravyach1');
    cy.get('#password').type('Sravya47');
    cy.get('#confirmPassword').type('Sravyach@47');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('div.alert.alert-danger.alert-dismissible.fade.show').should('be.visible').and('contain.text', 'Passwords do not match.');


}),
it('Registration_Form_passwordempty', () => {
    cy.get('input[name="username"]').type('Sravyach1');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('#flash').should('be.visible').and('contain.text', 'All fields are required.');


})
})


describe('Checkbox Interaction', () => {
  
  it('Checkbox Interaction', () => {
     cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username').type('practice');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('a','Home').click();
    cy.get('input[type="text"]').type('checkbox');
    cy.get('#search-button').click();
    cy.contains('a','Check Boxes').click();
    cy.get('#checkbox1').click();
    cy.get('#checkbox1').should('be.checked');
    cy.get('#checkbox1').click();
    cy.get('#checkbox1').should('not.be.checked');
    cy.get('#checkbox2').click();
   cy.get('#checkbox2').should('not.be.checked');

    //cy.contains('Logout').click();
 
  })
})

describe('Assertion', () => {
  
  it('Assertion', () => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username').type('practice');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('a','Home').click();
    cy.get('input[type="text"]').type('Assertion');
    cy.get('#search-button').click();
    cy.contains('a','Should Be').click();
    cy.get('#btn1').should('be.visible');
    cy.get('#btn2').should('not.be.visible');
    cy.get('#btn2').should('exist');
    cy.get('#ul1').should('be.visible');
    cy.get('#ul2').should('be.visible');
    cy.get('#cb1').should('be.checked');
    cy.get('#cb2').should('not.be.checked');
    cy.get('#div1').should('have.value', '');
    cy.get('#btn3').should('be.enabled');
    cy.get('#btn4').should('be.disabled');
    cy.get('label[for="a_number"]').should('have.text', 'number');
    cy.get('#a_number').should('exist');
    
    
  })
})
