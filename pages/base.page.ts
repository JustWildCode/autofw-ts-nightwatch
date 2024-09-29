import { NightwatchAPI } from 'nightwatch';

class BasePage {
    protected browser: NightwatchAPI;
    private defaultUrl: string;

    constructor(browser: NightwatchAPI) {
        this.browser = browser;
        this.defaultUrl = browser.baseUrl;
    }

    navigate(url: string = this.defaultUrl) {
        this.browser.url(url);
        return this;
    }

    click(selector: string) {
        this.browser.click(selector);
        return this;
    }

    verifyElementContainMessage(selector: string, expectedMessage: string) {
        this.browser
            .waitForElementVisible(selector)
            .assert.textContains(selector, expectedMessage);
        return this;
    }

    verifyElementDisplay(selector: string) {
        
        this.browser
            .waitForElementVisible(selector)
            .assert.elementPresent(selector);
        return this;
    }

    waitForElement(selector: string) {
        this.browser.waitForElementVisible(selector);
        return this;
    }

    assertTitle(expectedTitle: string) {
        this.browser.assert.titleContains(expectedTitle);
        return this;
    }
}

export default BasePage;
