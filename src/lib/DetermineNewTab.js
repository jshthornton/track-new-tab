import Fuse from './Fuse';
import $ from 'jquery';
import _ from 'lodash';

export default class {
  constructor(origin) {
    this._origin = origin;
    this._unloadDef = $.Deferred();
    this._fuse = new Fuse(this._unloadDef);

    _.bindAll(this, [
      '_onWindowUnload'
    ]);

    $(window).on('unload.trackNewTab', this._onWindowUnload);
  }

  _onWindowUnload(e) {
    this._fuse.disarm();
  }

  get promise() {
    return this._unloadDef.promise();
  }
}