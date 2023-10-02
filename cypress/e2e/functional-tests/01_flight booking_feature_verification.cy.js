import mainPage from '../../pages/mainPage.js';
import dataFlight from '../../fixtures/dataFlight.js';


describe ('User books a flight from City1 to City2 on the desired date', () => {
    it('should display appropriate results for the query', () => {



        mainPage.GoToWebsite();
        mainPage.PrivacyPolicySettingsAccept();
        // // mainPage.SearchBar(dataFlight);
        // cy.get('#swap-location').click();
        // cy.get('input[formcontrolname="origin"]', { timeout: 10000 }).type('Warsaw');
        // // cy.get('#mat-input-0').should('exist').and('be.visible').click().type('Warsaw'); // this bar is like shadow dom..
    });
});

