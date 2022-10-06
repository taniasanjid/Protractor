var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: {
    Login: 'Login.js',
    //wp: 'wp.js',
    //question: 'question.js',
    reply: 'reply.js',
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['incognito']
    }
  },
specs: ['Login.js','reply.js'],
allScriptsTimeout: 200000,
  getPageTimeout: 150000,
  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 900000000
  },

  
  onPrepare: function() {
    browser.driver.manage().window().maximize();
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
     screenshotsSubfolder: 'images',
     docTitle: 'my reporter' // Title of report
    }).getJasmine2Reporter());
    }

};