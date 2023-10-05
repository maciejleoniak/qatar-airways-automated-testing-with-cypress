import dataFlight from "../fixtures/dataFlight.json";

class SearchFlight {

  shadowDomSelector = '[ng-version="14.2.12"]';
  searchFlightFieldFromSelector = "#mat-input-0";
  searchFlightFieldToSelector = "#mat-input-1";
  searchDepartureDateSelector = "#dpFromDate";
  searchReturnDateSelector = "#dpToDate";

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
      .type(dataFlight.departureDate)
      .wait(2000)
      .type("{enter}");
  }

  //   cy.get(this.shadowDomSelector)
  //     .shadow()
  //     .find(this.searchReturnDateSelector)
  //     .click()
  //     .type(dataFlight.returnDate)
  //     .wait(2000)
  //     .type("{enter}");
  // }

  passangerPicker(passanger, cabinClass) { }
}

module.exports = new SearchFlight();
