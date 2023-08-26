/*
In TypeScript, classes do NOT support multiple inheritance directly
like some other languages do.
However, you can achieve similar behavior using interfaces and composition.
Here's an example of how you can simulate multiple inheritance using TypeScript.

In this example, we have three classes Animal, Flying, and Swimming, each 
representing different aspects of behavior. Then, we define two interfaces 
FlyingAnimal and SwimmingAnimal that combine the behavior of Animal with 
Flying and Swimming, respectively. Finally, we create Bird and Fish classes 
that implement these interfaces, effectively simulating multiple inheritance 
through composition.

Remember that while TypeScript doesn't support traditional multiple inheritance, 
using interfaces and composition allows you to achieve similar functionality 
while promoting more flexible and modular code design.
*/

// Define some classes and interfaces

class SomeAnimal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("SomeAnimal makes a sound");
    }
}

class Flying {
    fly(): void {
        console.log("Flying high");
    }
}

class Swimming {
    swim(): void {
        console.log("Swimming gracefully");
    }
}

// Implement multiple inheritance using composition

interface FlyingAnimal extends SomeAnimal, Flying {}
interface SwimmingAnimal extends SomeAnimal, Swimming {}

class Bird implements FlyingAnimal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Chirp chirp");
    }

    fly(): void {
        console.log("Bird is flying");
    }
}

class Fish implements SwimmingAnimal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Glub glub");
    }

    swim(): void {
        console.log("Fish is swimming");
    }
}

// Usage

const bird = new Bird("Sparrow");
bird.makeSound();
bird.fly();

const fish = new Fish("Salmon");
fish.makeSound();
fish.swim();
