"use strict";

const mark = {
  firstName: "Mark",
  lastName: "Batista",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName()}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName()}'s (${
        john.bmi
      })`
    : `${john.fullName()}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName()}'s (${
        mark.bmi
      })`
);
