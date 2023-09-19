import SearchFlight from "../components/searchField";

class MainPage {

    host = 'https://www.qatarairways.com/en-pl/homepage.html';

    GoToWebsite() {
        cy.visit(this.host);
    };
};

module.exports = new MainPage();