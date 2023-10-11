import dataFlight from "../fixtures/dataFlight.json";

class SearchFlight {

  shadowDomSelector = '[ng-version="14.2.12"]';
  searchFlightFieldFromSelector = "#mat-input-0";
  searchFlightFieldToSelector = "#mat-input-1";
  searchDepartureDateSelector = "#dpFromDate";
  searchReturnDateSelector = "#dpToDate";
  searchPassengerPickerSelector= "#passenger-content";
  

  searchFromTo() {
    cy.get(this.shadowDomSelector)
      .shadow()
      .find(this.searchFlightFieldFromSelector)
      .click()
      .type(dataFlight.flightFrom)
      .wait(2000)
      .type("{enter}");

    cy.get(this.shadowDomSelector)
      .shadow()
      .find(this.searchFlightFieldToSelector)
      .click()
      .type(dataFlight.flightTo)
      .wait(2000)
      .type("{enter}");
  }

  searchDate() {
    cy.get(this.shadowDomSelector)
      .shadow()
      .find(this.searchDepartureDateSelector)
      .first()
      .clear()
      .type(dataFlight.departureDate)

    cy.get(this.shadowDomSelector)
      .shadow()
      .find(this.searchReturnDateSelector)
      .first()
      .clear()
      .type(dataFlight.returnDate)

      cy.get(this.shadowDomSelector)
      .shadow()
      .find('.flightsearh-button')
      // .click()
      // cy.visit("https://booking.qatarairways.com/nsp/views/showBooking.action")
      // .click({ force: true });
      cy.log()
      cy.debug()
  }
}

module.exports = new SearchFlight();
