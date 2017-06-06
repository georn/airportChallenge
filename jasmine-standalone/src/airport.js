var Airport = function() {

  this.hangar = [];

  Airport.prototype.landingPlane = function (plane) {
    plane.landAt(this);
    this.hangar.push(plane);
    return "A plane has arrived."
  };
};
