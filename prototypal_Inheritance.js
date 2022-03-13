function Animal(name, energy) {
  this.name = name
  this.energy = energy
}
Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
  console.log(`${this.name} energy is ${this.energy}`)
}
Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
  console.log(`${this.name} energy is ${this.energy}.`)
}
Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}
function Dog(name, energy, breed) {
  Animal.call(this, name, energy)
  this.breed = breed
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function () {
  console.log('Woof Woof!')
  this.energy -= .1
}
const charlie = new Dog('Charlie', 10, 'Goldendoodle')
const tuffy = new Dog('Tuffy', 50, 'Dalmasion')
console.log(charlie.constructor)
charlie.eat(100)
tuffy.sleep(200)


// Charlie is eating.
// Charlie energy is 110
// Tuffy is sleeping.
// Tuffy energy is 250.
