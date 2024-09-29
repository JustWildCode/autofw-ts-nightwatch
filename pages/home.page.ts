import { NightwatchAPI } from 'nightwatch';
import BasePage from '../pages/base.page';
import RegisterPage from '../pages/register.page';

class HomePage extends BasePage {

    constructor(browser: NightwatchAPI) {
        super(browser);
    }

    search(query: string) {
        this.browser.setValue('textarea[name=q]', query);
        const actions = this.browser.actions({ async: true });
        return actions.keyDown(this.browser.Keys['ENTER']).keyUp(this.browser.Keys['ENTER']);
    }

    waitForResults() {
        this.browser.waitForElementVisible('#main');
        return this;
    }

    assertResultsContain(expectedText: string) {
        this.browser.assert.textContains('#main', expectedText);
        return this;
    }

    clickButtonByName(buttonName: string) {
        const xpath = `//div[contains(@class,'justify-end items-center')]//a[text()='${buttonName}']`;
        this.browser
            .useXpath()
            .click(xpath);
        const registerPage = new RegisterPage(browser);
        return registerPage;
    }
}

export default HomePage;
