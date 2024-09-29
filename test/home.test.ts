import { NightwatchAPI, NightwatchTests } from 'nightwatch';
import HomePage from '../pages/home.page';

const home: NightwatchTests = {
    'Verify user is able to navigate to Home Page': (browser: NightwatchAPI) => {
        const homePage = new HomePage(browser);
        homePage.navigate().assertTitle('Yoma Car Share');
    },
};

export default home;
