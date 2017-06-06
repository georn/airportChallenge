var Airport = function() {

  var DEFAULT_CAPACITY = 51;
  this.hangar = [];
  this.capacity = DEFAULT_CAPACITY;

  Airport.prototype.landingPlane = function (plane) {
    plane.landAt(this);
    if (this.hangar.length >= this.capacity) {
      throw "Airport is full";
    } else {
      this.hangar.push(plane);
    };
    return "A plane has arrived."
  };

  Airport.prototype.overrideCapacity = function (number) {
    this.capacity = number;
  };

};
