/*
Here we have classes representing different levels of classification: 
Animal, Dog, and BorderCollie.
The inheritance hierarchy is set up to showcase the concept of generalization.
The program demonstrates how an instance of a class can be classified into more 
general categories, and how generalization can be transitive across multiple 
levels of inheritance.
Classification is not transitive.
*/
class AShape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class ACircle extends AShape {
    constructor() {
        super("Circle");
    }
}

class Ellipse extends AShape {
    constructor() {
        super("Ellipse");
    }
}

class Cylinder extends AShape {
    constructor() {
        super("Cylinder");
    }
}

function demonstrateNonTransitiveClassification() {
    const aCircle = new ACircle();
    const ellipse: AShape = new Ellipse();
    const cylinder: AShape = new Cylinder();

    // A ACircle is a AShape
    console.log(`${aCircle.name} is a ${aCircle.constructor.name}`);

    // An Ellipse is a AShape
    console.log(`${ellipse.name} is a ${ellipse.constructor.name}`);

    // A Cylinder is a AShape
    console.log(`${cylinder.name} is a ${cylinder.constructor.name}`);

    // However, a Cylinder is not an Ellipse (violating transitivity)
    console.log(`Is a ${cylinder.constructor.name} an ${ellipse.constructor.name}? ${cylinder instanceof Ellipse}`);
}

demonstrateNonTransitiveClassification();
