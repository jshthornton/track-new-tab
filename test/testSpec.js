import Track from '../lib/Track';
import $ from 'jquery';

describe('Test', function() {
  it('Should do this', function() {
    var $link = $('<a/>');
    $(document.body).append($link);

    var tracker = new Track();

    $link.click();
  });
});