import SearchFlight from "../components/searchFlight";

class MainPage {

  host = 'https://www.qatarairways.com/';
  PrivacyPolicySettingsSelector = '#cookie-id';
  PrivacyPolicySettingsAgree = '#cookie-accept-all';
  BannerSelector = '.modal-content'; // it pop up in random moment
  BannerCloseSelector = '.close-privilege-banner .close'; // for pop up close

  GoToWebsite() {
    cy.clearCookies();
    cy.visit(this.host);
  };

  PrivacyPolicySettingsAccept() {
    cy.get(this.PrivacyPolicySettingsSelector, { timeout: 10000 }).should('exist').and('be.visible').then(($element) => {
      cy.wait(1000);
      cy.get(this.PrivacyPolicySettingsAgree).click();
    });
  };

  SearchBar(dataFlight) {
    SearchFlight.searchFor(dataFlight);
  };
};

module.exports = new MainPage();