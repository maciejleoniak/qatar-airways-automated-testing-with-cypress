import SearchFlight from "../components/searchFlight";

class MainPage {

    host = 'https://www.qatarairways.com/en-pl/homepage.html';
    PrivacyPolicySettingsSelector = '#a.cookie-accept-all';

    GoToWebsite() {
        cy.visit(this.host);
    };

    PrivacyPolicySettingsAccept() {
        cy.get(this.PrivacyPolicySettingsSelector).click();
      };

      SearchBar(flight) {
        SearchFlight.searchFor(flight);
      };
};

module.exports = new MainPage();