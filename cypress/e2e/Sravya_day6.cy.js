import user from  "../fixtures/user.json"
describe('Ass6', () => {
    it('login', () => {
        cy.fixture('user').then((user) => {
            cy.visit('https://practice.expandtesting.com/login');
            cy.fillInput('input#username', user.username);
            cy.fillInput('input#password', user.password);
            cy.get('button[type="submit"]').click();
        });
    });
});



describe('Ass6_01', () => {
    let userdata;
    beforeEach('getting fixture',()=>{
    cy.fixture('user').then((user) => {
        userdata=user;
            
        })
    })
    it('login_01', () => {
        cy.fixture('user').then((user) => {
            // cy.visit('https://practice.expandtesting.com/login');
            // cy.fillInput('input#username', user.username);
            // cy.fillInput('input#password', user.password);
            // cy.get('button[type="submit"]').click();
        })
        cy.log(userdata.username)
         cy.log(userdata.password)
    });
});

describe('Ass6_02', () => {
   
    it.only('login_02', () => {
        
        cy.log(user.username)
         cy.log(user.password)
    });
});

describe('Dynamic Table - CPU Usage', () => {
  it('Logs browser CPU usage and counts those over 20%', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');
       cy.get('.table table-striped thead tr').each(($tr,i)=>{
        cy.wrap($tr).find('td').then(($td)=>{
            const name=$td.eq(0).text();
            const cpu=$td.eq(2).text();
            cy.log('Row $(i):${name} - ${CPU}')
        })
       })
      })})