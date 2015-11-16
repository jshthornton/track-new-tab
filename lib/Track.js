import $ from 'jquery';
import _ from 'lodash';

export default class {

  constructor() {
    this.bindFns();
    this.bindEvents();
  }

  bindFns() {
    _.bindAll(this, [
      'onLinkClick'
    ]);
  }

  bindEvents() {
    var $body = $(document.body);

    $body.on('click.trackNewTab', 'a', this.onLinkClick);
  }



  cleanup() {

  }

  // Events
  onLinkClick(e) {
    throw new Error('Whhhhhhhhhhhhhhhhhhhhhhhh');
  }
}