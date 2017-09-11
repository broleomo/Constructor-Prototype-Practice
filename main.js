//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name,color,status, happy,hungry) {
  this.name = name;
  this.color = color;
  this.status = status;
  this.happy = true;
  this.hungry = false;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog('Sadie', 'black', 'normal', true, false);
const moonshine = new Dog('Moonshine', 'black', 'normal', false , true, undefined);
const atticus = new Dog('Atticus', 'black', 'normal', true, false, undefined);
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name,cool) {
  this.name = name;
  this.cool = true;
}

// Instances of Human
// Needed: mason, julia
const mason = new Human('Mason', false);
const julia = new Human('Julia', true);

// function pet(Dog) {
//
// }
Human.prototype.pet = function (){

}

// module.exports = {
//   Dog,
//   Human
// };
