import BasePage from '../pages/base.page';
import { NightwatchAPI } from 'nightwatch';

class RegisterPage extends BasePage {

    constructor(browser: NightwatchAPI) {
        super(browser);
    }

    private locators = {
        submitButton: `//button[@type='submit']`,
    };

    getInputFieldByName(name: string): string {
        return `//label[text()='${name}']/following-sibling::div/input`;
    }

    getJoinNowByType(joinType: string): string {
        return `(//h2[contains(text(),'individual')]/following-sibling::button)[1]`;
    }

    getMessageByText(text: string): string {
        return `//*[text()='${text}']`;
    }

    fillForm(fullName: string, email: string, password: string) {
        this.browser
            .setValue(this.getInputFieldByName("Full Name"), fullName)
            .setValue(this.getInputFieldByName("Email"), email)
            .setValue(this.getInputFieldByName("Password"), password)
            .setValue(this.getInputFieldByName("Confirm Password"), password);
        return this;
    }

    submit() {
        this.browser.click(this.locators.submitButton);
        return this;
    }
}

export default RegisterPage;
