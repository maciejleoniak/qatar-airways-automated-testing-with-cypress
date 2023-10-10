import mainPage from '../../pages/mainPage.js';

describe('User is able to sign up for the Qatar Airways newsletter', () => {
    it('should sing up for newsletter', () => {

        mainPage.GoToWebsite();
        mainPage.PrivacyPolicySettingsAccept();
        mainPage.newsletterSingUp();
    });
});