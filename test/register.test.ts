import { NightwatchAPI, NightwatchTests } from 'nightwatch';
import HomePage from '../pages/home.page';
import RegisterPage from '../pages/register.page';

function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}${month}${year}${hours}${minutes}`;
}

const home: NightwatchTests = {
    'Verify user is able to register as individual user': (browser: NightwatchAPI) => {
        const homePage = new HomePage(browser);
        const registerPage = new RegisterPage(browser);

        const now = new Date();
        const formattedDate = formatDate(now);
        const fullName = `test automation`;
        const email = `test${formattedDate}@gmail.com`;
        const password = 'Password1@';

        homePage
            .navigate()
            .clickButtonByName("Sign Up")
        
        registerPage
            .click(registerPage.getJoinNowByType("individual"))
            .fillForm(fullName, email, password)
            .submit()
            .verifyElementDisplay(registerPage.getMessageByText("OTP Verification"));
    }
};

export default home;
