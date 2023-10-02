class SearchFlight {

    searchFlightFieldFromSelector = '#mat-input-0';
    searchFlightFieldToSelector = '#mat-input-1';

    searchFor(flightFrom, flightTo) {
        cy.get(this.searchFlightFieldFromSelector)
            .click() //to check
            .clear()
            .type(flightFrom)
        cy.get(this.searchFlightFieldToSelector)
            .click() 
            .clear()
            .type(flightTo);
    };

    searcheDate(departureData, returnData) {

    };

    passangerPicker(passanger, cabinClass) {

    };
};

module.exports = new SearchFlight();
