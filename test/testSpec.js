import Track from '../lib/Track';
import $ from 'jquery';
import sinon from 'sinon';

describe('lib/Track', function() {
  describe('When opening in current window', function() {
    it('Should not callback', function(done) {
      var $link = $('<a/>');
      $link.prop('href', 'http://example.com/')
        .prop('innerHTML', 'Example');
      $(document.body).append($link);

      var callbackSpy = sinon.spy();

      var tracker = new Track(callbackSpy);

      $link.click();
      $(window).trigger('unload');

      setTimeout(function() {
        expect(callbackSpy.called).toBe(true);
        expect(callbackSpy.args[0][0].newtab).toBe(false);
        done();
      }, 1000);
    });
  });

  describe('When opening in a new tab', function() {
    it('Should callback', function(done) {
      var $link = $('<a/>');
      $link.prop('href', 'http://example.com/')
        .prop('target', '_blank')
        .prop('innerHTML', 'Example');
      $(document.body).append($link);

      var callbackSpy = sinon.spy();

      var tracker = new Track(callbackSpy);

      $link.click();

      setTimeout(function() {
        expect(callbackSpy.called).toBe(true);
        expect(callbackSpy.args[0][0].newtab).toBe(true);
        done();
      }, 1000);
    });
  });
});