/*
TypeScript does NOT support diamond inheritance.
Diamond inheritance refers to a situation in object-oriented
programming where a class inherits from two classes that have 
a common base class. 
This can lead to ambiguity and confusion in the inheritance 
hierarchy.

In order to avoid these issues, many programming languages, 
including TypeScript, typically do not allow for multiple 
inheritance (inheriting from multiple classes) to avoid 
the complexities associated with diamond inheritance. 
TypeScript only supports single inheritance, where a class 
can inherit from a single base class.

If you need to share functionality from multiple sources 
in TypeScript, you can use interfaces and mixins.
Interfaces define contracts that classes must adhere to, 
and mixins allow you to combine behaviors from multiple 
sources into a single class. 
This approach helps achieve code reuse and composition without 
running into the problems associated with diamond inheritance.

This is a simple example of using interfaces and mixins in TypeScript.
*/
class Base {
    baseMethod() {
        console.log("Base method");
    }
}

class Mixin1 {
    mixin1Method() {
        console.log("Mixin 1 method");
    }
}

class Mixin2 {
    mixin2Method() {
        console.log("Mixin 2 method");
    }
}

interface Combined extends Base, Mixin1, Mixin2 {}

class CombinedClass implements Combined {
    baseMethod: () => void;
    mixin1Method: () => void;
    mixin2Method: () => void;

    constructor() {
        this.baseMethod = Base.prototype.baseMethod.bind(this);
        this.mixin1Method = Mixin1.prototype.mixin1Method.bind(this);
        this.mixin2Method = Mixin2.prototype.mixin2Method.bind(this);
    }
}

const instance = new CombinedClass();
instance.baseMethod();    // Output: Base method
instance.mixin1Method();  // Output: Mixin 1 method
instance.mixin2Method();  // Output: Mixin 2 method
