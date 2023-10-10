class newsletterComponent {

    newsletterEmailSelector = '#email';
    newsletterFromSelector = '#newsLetterFrom-new';
    newsletterAcceptPrivacyNoticeSelector = "#accept";

    newsletterFillUp() {
        cy.get(this.newsletterEmailSelector)
            .type("testEmail", { force: true })
        cy.get(this.newsletterFromSelector)
            .type("testFrom", { force: true })
            .wait(2000)
    };

    newsletterPrivacyNotice() {
        cy.get('span[role="checkbox"]')
            .last()
            .click()
    };

}

module.exports = new newsletterComponent();