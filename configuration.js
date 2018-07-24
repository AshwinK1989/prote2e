var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

seleniumAddress:'http://localhost:4444/wd/hub',
allScriptsTimeout: 220000,
		
specs:['./specs/CarFlowTest.js'],	

//multiCapabilities:[{browserName:"chrome"},{browserName:"firefox"}],
		
onPrepare: function() {
		      jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
		   },

jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 1440000
   }
		
}