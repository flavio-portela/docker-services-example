const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits home page', function(){

    const browser = new Browser();

    before(function(done){
        browser.visit('/', done);
    });

    it('should be successful', function(){
        browser.assert.success();
    });

    it('should see hello world', function(){
        browser.assert.text('h1', 'Hello World');
    });
});