
const loginPage = require('./pageObjects/loginPage');
const profilePage = require('./pageObjects/profilePage');    

    describe('Login suite', () => {
        it('user is able to login', async () => {
            await loginPage.login('user1', 'strongPassword');
            expect(await profilePage.userName.getText()).toContain('Ivan Ivanov');
        });
    });   


//loginPage.js
class LoginPage {

    constructor () {
        this.userInput = element(by.css('.userInput'));
        this.passwordInput = element(by.css('.passwordInput'));
        this.submitBtn = element(by.css('.submitButton'));
    };

    login(user, password) {
        this.userInput.sendKeys(user);
        this.passwordInput.sendKeys(password);
        this.submitBtn.click(); 
    };
};

module.exports = new LoginPage();

//profilePage.js
class ProfilePage {
    constructor() {
        this.userName = element(by.css('.userName'));
    }
    
};

module.exports = new ProfilePage();