var page = require('../pages/pageObj.js');

module.exports = {
    'ValidateShareBar' : function (browser) {
      browser
      .page.pageObj().goToInsider()
      .page.pageObj().shareVisible()
      .page.pageObj().expandShareButton()
      .end();
  }
};