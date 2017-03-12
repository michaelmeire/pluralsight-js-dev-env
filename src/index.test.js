import {expect} from 'chai'; // use a named import to have a reference to 'expect' from the chai-library
import jsdom from 'jsdom';
import fs from 'fs'; // fs comes along with node, and is to interact with the file system using node

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});


describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) { // the callback function is run after jsdom has pulled index.html as virtual dom into memory
      // window represents the window in the browser
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hi there!");
      // When we call jsdom, there is an asynchronous call because we pass in the function(err,window)
      // We have to setup our test to be asynchronous.
      // To do that, when we call it, we pass in the done,
      // And call done() here to tell mocha that the test is done, so it will only report
      // it's results after that
      done();
      window.close();
    })
  })
});
