var page = require('../pages/pageObj.js');

module.exports = {
  'ValidateAll' : function (browser) {
    browser
    .page.pageObj().goToInsider()
    .page.pageObj().facebookShare()
    .page.pageObj().twitterShare()
    .page.pageObj().linkedinShare()
    .page.pageObj().flipboardShare()
    .page.pageObj().emailShare()
    .page.pageObj().linkShare()
    .end();
  }
};
