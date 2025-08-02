import Formdata from "../fixtures/FormData.json"
//1. Using Fixtures for Test Data
describe('Ass6', () => {
    it('login', () => {
        cy.fixture('user').then((user) => {
            cy.visit('https://practice.expandtesting.com/login');
            cy.fillInput('input#username', user.username);
            cy.fillInput('input#password', user.password);
            cy.get('button[type="submit"]').click();
        });
    });

it('Registration_Form_Happypath', () => {
    cy.fixture('Formdata').then((user) => {
    cy.visit('https://practice.expandtesting.com/register')
    cy.get('input[name="username"]').type(Formdata.username);
    cy.get('#password').type(Formdata.password);
    cy.get('#confirmPassword').type(Formdata.confirmPassword);
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    
})});

//2. Working with Checkboxes, Dropdowns, Radio Buttons

 it('selects QA checkbox, India dropdown, and Blue radio button', () => {
    // not able to find the QA checkbox selection option so done this one
    cy.visit('https://practice.expandtesting.com/checkboxes');
    cy.get('#checkbox1').check().should('be.checked');
    cy.get('#checkbox2').uncheck().should('not.be.checked');
 });
   
    it('Blue radio button', () => {
    //pick Blue radio button
    cy.visit('https://practice.expandtesting.com/radio-buttons');
    cy.get('#blue').should('be.checked');
    cy.get('#red').should('not.be.checked');
    cy.get('#red').should('not.be.checked');
    cy.get('#blue').check().should('be.checked');

});
it('select India', () => {
    cy.visit('https://practice.expandtesting.com/dropdown');
    cy.get('#dropdown').select('Option 1').should('have.value', '1');
//   cy.get('#elementsPerPageSelect').select('20').should('have.value', '20');
     cy.get('#country').select('IN').should('have.value', 'IN');
  });

  //3. Scrolling, Hover, Drag & Drop
  it('scroll to visible', () => {
    cy.visit('https://practice.expandtesting.com/scrollbars');
    cy.get('#hidingButton').scrollIntoView().click();

  });
  it('drags source to target', () => {
    cy.visit('https://practice.expandtesting.com/drag-and-drop');
   // cy.get('#column-a').drag('#column-b');
    const dataTransfer = new DataTransfer();
     cy.get('#column-a').trigger('dragstart', { dataTransfer });
     cy.get('#column-b').trigger('dragover', { dataTransfer }).trigger('drop', { dataTransfer });
     cy.get('#column-a').trigger('dragend', { dataTransfer });
 });
  it('shows tooltip text on hover', () => {
    cy.visit('https://practice.expandtesting.com/tooltips');
    cy.get('#btn1').trigger('mouseover');
    cy.get('#btn1').should('be.visible').and('contain.text', 'Tooltip on top');
    cy.get('#btn2').trigger('mouseover');
    cy.get('.tooltip-inner').should('be.visible').and('contain.text', 'Tooltip on top');

  });
})
/*********************************Assignment A:
• On /dynamic-table, use .each() to log each browser name and its CPU usage.
Assignment B:
• Count how many browsers have CPU usage over 20%*********************** */

describe('Dynamic Table - CPU Usage Logs and Count', () => {
  it('Logs browser names with CPU usage and counts those over 20%', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');

    let nameIndex = -1;
    let cpuIndex = -1;
    let highCpuCount = 0;

    cy.get('.table.table-striped thead tr th').then(($headers) => {
      $headers.each((i, th) => {
        const text = th.innerText.trim();
        if (text === 'Name') nameIndex = i;
        if (text === 'CPU') cpuIndex = i;
      });
    }).then(() => {
      cy.get('.table.table-striped tbody tr').each(($row) => {
        const $cells = Cypress.$($row).find('td');

        const browserName = $cells.eq(nameIndex).text().trim();
        const cpuText = $cells.eq(cpuIndex).text().trim();
        const cpu = parseFloat(cpuText.replace('%', ''));

        cy.log(`${browserName} → CPU: ${cpu}%`);

        if (cpu > 20) {
          highCpuCount += 1;
        }
      });
    }).then(() => {
      cy.log(`Browsers with CPU > 20%: ${highCpuCount}`);
    });
  });
});

// Looping through rows with .each()
/********5. Validating Dynamic Content in Tables
Assignment:
• On /dynamic-table, locate the “Chrome” row.
• Compare its CPU value in the table with the yellow label (#chrome-cpu).
• Assert both match..*********/
describe('Dynamic Table - Chrome CPU Assertion', () => {
  it('Logs Chrome CPU from table and compares it with the #chrome-cpu label', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');

    let nameIndex = -1;
    let cpuIndex = -1;
    let chromeCpuFromTable = '';

    cy.get('.table.table-striped thead tr th').then(($headers) => {
      $headers.each((i, th) => {
        const header = th.innerText.trim();
        if (header === 'Name') nameIndex = i;
        if (header === 'CPU') cpuIndex = i;
      });
    }).then(() => {
      cy.get('.table.table-striped tbody tr').each(($row) => {
        const $cells = $row.find('td');
        const browserName = $cells.eq(nameIndex).text().trim();

        if (browserName === 'Chrome') {
          chromeCpuFromTable = $cells.eq(cpuIndex).text().trim();
          cy.log(`CPU Usage for Chrome from table: ${chromeCpuFromTable}`);
        }
      });
    }).then(() => {
      cy.get('#chrome-cpu').invoke('text').then((cpuFromLabel) => {
        const labelCpu = cpuFromLabel.replace('Chrome CPU: ', '').trim();
        cy.log(`CPU Usage for Chrome from label: ${labelCpu}`);
        expect(labelCpu).to.equal(chromeCpuFromTable);
      });
    });
  });
})
/*****  6. Extracting and Asserting Table Data
Assignment:
• Build a dynamic column-matching test:
o Find the column index for "Memory".
o Print each row's browser and corresponding memory usage****** */

describe('Dynamic Table - Memory Column Match', () => {
  it('Logs browser name and memory usage', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');

    let nameIndex = -1;
    let memoryIndex = -1;

    cy.get('.table.table-striped thead tr th').then(($headers) => {
      $headers.each((i, th) => {
        const header = th.innerText.trim();
        if (header === 'Name') nameIndex = i;
        if (header === 'Memory') memoryIndex = i;
      });
    }).then(() => {
      cy.get('.table.table-striped tbody tr').each(($row) => {
        const $cells = $row.find('td');
        const browser = $cells.eq(nameIndex).text().trim();
        const memory = $cells.eq(memoryIndex).text().trim();
        cy.log(`Browser: ${browser}, Memory Usage: ${memory}`);
      });
    });
  });
});

/*********** 7. Hands-on: Automate Validations on a Dynamic HTML Table
Assignment:
• Loop through /dynamic-table and:
o Validate each row has a browser name.
o Assert no cell is empty.
o Verify at least one browser has CPU usage above 15%********** */
describe('Dynamic Table - Validate cells and CPU without failing', () => {
  it.only('Checks no empty cells, browser names present, and logs CPU > 15% status', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');

    let nameIndex = -1;
    let cpuIndex = -1;
    let highCpuFound = false;

    cy.get('.table.table-striped thead tr th').then(($headers) => {
      $headers.each((i, th) => {
        const headerText = th.innerText.trim();
        if (headerText === 'Name') nameIndex = i;
        if (headerText === 'CPU') cpuIndex = i;
      });
    }).then(() => {
      cy.get('.table.table-striped tbody tr').each(($row) => {
        const $cells = Cypress.$($row).find('td');

        $cells.each((_, cell) => {
          const cellText = Cypress.$(cell).text().trim();
          expect(cellText, 'No cell should be empty').to.not.equal('');
        });

        const browserName = $cells.eq(nameIndex).text().trim();
        expect(browserName, 'Browser name should be present').to.not.equal('');

        const cpuText = $cells.eq(cpuIndex).text().trim();
        const cpu = parseFloat(cpuText.replace('%', ''));

        if (cpu > 15) {
          highCpuFound = true;
          cy.log(`${browserName} CPU: ${cpu}% → Above 15%`);
        } else {
          cy.log(`${browserName} CPU: ${cpu}% → 15% or below`);
        }
      });
    }).then(() => {
      if (!highCpuFound) {
        cy.log('No browser has CPU usage above 15%');
      } else {
        cy.log('At least one browser has CPU usage above 15%');
      }
    });
  });
});
