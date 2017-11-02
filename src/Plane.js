var Plane = function() {

  this._location = "default";

  Plane.prototype.takeOff = function () {
    this._location = "air";
  };

  Plane.prototype.landAt = function (airport) {
    this._location = airport;
  };

};

module.exports = Plane;
