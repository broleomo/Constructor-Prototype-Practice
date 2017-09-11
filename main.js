//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog ({name,color,status, happy,hungry}) {
  this.name = name;
  this.color = color;
  this.status = status;
  this.happy = happy;
  this.hungry = hungry;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog({name: 'Sadie', color:'black', status:'normal', happy:true, hungry:false});
const moonshine = new Dog({name:'Moonshine', color:'black', status:'normal', happy:false , hungry:true});
const atticus = new Dog('Atticus', 'black', 'normal', true, false);
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name,cool) {
  this.name = name;
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia
const mason = new Human('Mason', false);
const julia = new Human('Julia', true);

// function pet(Dog) {
//
// }
Human.prototype.pet = function (dog) {
dog.status = 'happy';
};

Human.prototype.feed = function(dog){
  dog.hungry = false;
}

// module.exports = {
//   Dog,
//   Human
// };
