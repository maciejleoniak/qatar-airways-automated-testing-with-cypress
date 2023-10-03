import dataFlight from '../fixtures/dataFlight.json'

class SearchFlight {

    searchFlightFieldFromSelector = '#mat-input-0';
    searchFlightFieldToSelector = '#mat-input-1';
    shadowDomSelector = '[ng-version="14.2.12"]';

    searchFor() {
        cy.get(this.shadowDomSelector)
            .shadow()
            .find(this.searchFlightFieldFromSelector)
            .click()
            .type(dataFlight.flightFrom)
            .wait(2000)
            .type('{enter}')

        cy.get(this.shadowDomSelector)
            .shadow()
            .find(this.searchFlightFieldToSelector)
            .click()
            .type(dataFlight.flightTo)
            .wait(2000)
            .type('{enter}')
    };

    searcheDate(departureData, returnData) {

    };

    passangerPicker(passanger, cabinClass) {

    };
};

module.exports = new SearchFlight();
