describe('APIrequest',()=>{
    let accessToken;
    it('RestAPI',()=>{
        cy.request('POST','https://practice.expandtesting.com/notes/api/users/register',{
           name: "sravya21",
           email: "scg@gamails41.com",
           password:"scg@gamail35.com"
        }).then((res)=>{
            cy.log(res);
            expect(res.status).to.eq(201);
            expect(res.body.message).to.eq("User account created successfully");
        });
    })
it('RestAPI', () => {
  cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {
    email: "scg@gamails41.com",
    password: "scg@gamail35.com"
  }).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.message).to.eq("Login successful");
    expect(res.body.data).to.have.property('token');

    const accessToken = res.body.data.token;
    cy.log(`Access Token: ${accessToken}`);

    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': accessToken
      },
      body: {
        title: "scg@gamails41.com",
        description: "suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuom",
        category: "Work"
      }
    }).then((res2) => {
      cy.log(JSON.stringify(res2.body));
      expect(res2.status).to.eq(200);
      expect(res2.body.success).to.be.true;
      expect(res2.body.data).to.have.property('id');

      const createdNoteId = res2.body.data.id;

      cy.request({
        method: 'GET',
        url: 'https://practice.expandtesting.com/notes/api/notes',
        headers: {
          'x-auth-token': accessToken
        }
      }).then((res3) => {
        cy.log(JSON.stringify(res3.body));
        expect(res3.status).to.eq(200);
        expect(res3.body.success).to.be.true;

        // Assert the notes array contains the newly created note id
        const noteExists = res3.body.data.some(note => note.id === createdNoteId);
        expect(noteExists).to.be.true;

        // DELETE the created note
        cy.request({
          method: 'DELETE',
          url: `https://practice.expandtesting.com/notes/api/notes/${createdNoteId}`,
          headers: {
            'x-auth-token': accessToken
          }
        }).then((res4) => {
          expect(res4.status).to.eq(200);

          // Verify the note is deleted
          cy.request({
            method: 'GET',
            url: 'https://practice.expandtesting.com/notes/api/notes',
            headers: {
              'x-auth-token': accessToken
            }
          }).then((res5) => {
            expect(res5.status).to.eq(200);
            expect(res5.body.success).to.be.true;
            const deletedNoteExists = res5.body.data.some(note => note.id === createdNoteId);
            expect(deletedNoteExists).to.be.false;
          });
        });
      });
    });
  });
})})
