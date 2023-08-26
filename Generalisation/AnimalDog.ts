/*
In this example, the Animal class serves as the superclass, 
and the Dog class is a subclass that inherits from Animal. 
The Dog class has its own implementation of the makeSound method, 
which overrides the method from the Animal class.

When you create an instance of Dog, it inherits the properties 
and methods from the Animal class, and you can also see how 
method overriding works.

Remember, inheritance should be used carefully and judiciously, 
as it introduces a tight coupling between classes. 
In modern programming, composition and interfaces are often preferred 
over deep inheritance hierarchies to achieve more flexible and 
maintainable code.
*/
class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Creating instances of the classes
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Buddy");
  
  // Calling methods
  animal.makeSound();  // Output: Generic Animal makes a sound.
  dog.makeSound();     // Output: Buddy barks.
  