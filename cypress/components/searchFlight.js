class SearchFlight {

    searchFlightFieldFromSelector = 'input[formcontrolname="origin"]';
    searchFlightFieldToSelector = 'input[formcontrolname="destination"]';


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
};
module.exports = new SearchFlight();
