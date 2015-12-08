import $ from 'jquery';
import _ from 'lodash';
import DetermineNewTab from './DetermineNewTab';

export default class {
  constructor(callback) {
    this._unloadThreshold = 500;

    this._bindFns();
    this._bindEvents();
    this._callback = callback;
  }

  _bindFns() {
    _.bindAll(this, [
      '_onLinkClick'
    ]);
  }

  _bindEvents() {
    var $body = $(document.body);

    $body.on('click.trackNewTab', 'a', this._onLinkClick);
  }

  cleanup() {

  }

  // Events
  _onLinkClick(e) {
    if(e.isDefaultPrevented() === true) {
      // Skip as nothing is going on
      return;
    }
    var click = new DetermineNewTab(e.target);
    click.promise.then(function() {
      // When it is unloaded aka not new tab.
      this._callback({
        newtab: false
      });
    }.bind(this), function() {
      // When it is not unloaded aka new tab
      this._callback({
        newtab: true
      });
    }.bind(this));
  }
}