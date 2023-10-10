import mainPage from '../../pages/mainPage.js';


describe('User books a flight from City1 to City2 on the desired date', () => {
    it('should display appropriate results for the query', () => {

        mainPage.GoToWebsite();
        mainPage.PrivacyPolicySettingsAccept();
        mainPage.SearchBar();
    });
});
