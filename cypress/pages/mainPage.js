import privacyPolicy from "../components/privacyPolicy";
import SearchFlight from "../components/searchFlight";
import newsletter from "../components/newsletter";

class MainPage {

  host = "https://www.qatarairways.com/";
  BannerSelector = ".modal-content"; // it pop up in random moment
  BannerCloseSelector = ".close-privilege-banner .close"; // for pop up close

  GoToWebsite() {
    cy.clearCookies();
    cy.visit(this.host);
  }

  PrivacyPolicySettingsAccept() {
    privacyPolicy.accept();
  }

  SearchBar() {
    SearchFlight.searchFromTo();
    SearchFlight.searchDate();
  }

  newsletterSingUp() {
    newsletter.newsletterFillUp();
    newsletter.newsletterPrivacyNotice();
  }
}

module.exports = new MainPage();
