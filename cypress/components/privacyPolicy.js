class privacyPolicy {

    PrivacyPolicySettingsSelector = '#cookie-id';
    PrivacyPolicySettingsAgree = '#cookie-accept-all';

    accept() {
        cy.get(this.PrivacyPolicySettingsSelector, { timeout: 10000 })
            .should('exist').and('be.visible')
            .then(($element) => {
                cy.wait(1000);
                cy.get(this.PrivacyPolicySettingsAgree).click();
            });
    };

}

module.exports = new privacyPolicy();