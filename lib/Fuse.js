
export default class {
  constructor(def, timeout = 500, autoIgnite = true) {
    this._def = def;
    this._timeout = timeout;
    this._timer = null;

    if(autoIgnite === true) {
      this.ignite();
    }
  }

  ignite() {
    this._timer = setTimeout(this._detonate.bind(this), this._timeout);
  }

  disarm() {
    clearTimeout(this._timer);
    this._def.resolve();
  }

  _detonate() {
    this._def.reject({
      fuse: true,
      message: 'End of fuse'
    });
  }
}