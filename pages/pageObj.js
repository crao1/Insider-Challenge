module.exports = function (browser) {
    this.goToInsider = function() {
      browser
      .windowMaximize()
      .url('https://www.businessinsider.com/ikea-nyc-store-planning-studio-tour-2019-4')
      .waitForElementVisible('body', 1000)
      return browser;
    };

    this.shareVisible = function(browser) {
        browser
        .waitForElementVisible("data-e2e-name='share-wrapper-top'", 1000);
        return browser;
    };

    this.expandShareButton = function () {
        browser
        .click('data-share-icon')
        .title(function(title) {
            this.assert.title(result.value, 'Collapse Share Options');
            console.log(result.value);
        });
        return browser;
    };

    this.facebookShare = function(browser) {
        browser
        .click("data-e2e-name='share-link-facebook'")
        browser.windowHandles(function (result) {
        browser.switchWindow(result.value[1]);
        browser.assert.title('Facebook');
        browser.closeWindow();
        browser.switchWindow(result.value[0]);
    });
    return browser
    };

    this.twitterShare = function(browser) {
        browser
        .click("data-e2e-name='share-link-twitter'")
        browser.windowHandles(function (result) {
        browser.switchWindow(result.value[1]);
        browser.assert.title('Twitter');
        browser.closeWindow();
        browser.switchWindow(result.value[0]);
    });
    return browser
    };
    
    this.linkedinShare = function(browser) {
        browser
        .click("data-e2e-name='share-link-linkedin'")
        browser.windowHandles(function (result) {
        browser.switchWindow(result.value[1]);
        browser.assert.title('LinkedIn Login, Sign in | LinkedIn');
        browser.closeWindow();
        browser.switchWindow(result.value[0]);
    });
    return browser
    };

    this.flipboardShare = function(browser) {
        browser
        .click("data-e2e-name='share-link-flipboard'")
        browser.windowHandles(function (result) {
        browser.switchWindow(result.value[1]);
        browser.assert.title('Flip into magazine - logged out');
        browser.closeWindow();
        browser.switchWindow(result.value[0]);
    });
    return browser
    };

    this.emailShare = function() {
        browser
        .waitForElementVisible("data-e2e-name='share-link-email'")
        .url(function(result) {
          this.assert.equal(result.value, href="'mailto:?subject=I visited Ikea's new Manhattan location — and it was like nothing else I've seen from the retailer&body=I%20visited%20Ikea's%20new%20Manhattan%20location%20%E2%80%94%20and%20it%20was%20like%20nothing%20else%20I've%20seen%20from%20the%20retailer%0D%0A%0D%0Ahttps%3A%2F%2Fwww.businessinsider.com%2Fikea-nyc-store-planning-studio-tour-2019-4&'''");
          console.log(result.value);
        });

    return browser
    };

    this.linkShare = function() {
        browser
        .waitForElementVisible("data-e2e-name='share-link-copy-link'")
        .url(function(result) {
          this.assert.equal(result.value, href='#');
          console.log(result.value);
        });

    return browser
    };
    
}