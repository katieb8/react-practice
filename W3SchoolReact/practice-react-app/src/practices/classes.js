//class is a type of function, and the properties are assigned inside a constructor() methid
// standard naming convention for class name to begin with uppercase character
class Car {
    constructor(name) {
      this.brand = name;
    }

    // adding a method
    present() {
        return 'I have a ' + this.brand;
    }
}

// class inheritance - using 'extends'
// inherits all the methods from another class
// here, 'Model' class inherits the methods from the 'Car' class
class Model extends Car {
    constructor(name, mod) {
        super(name);            // the super() method refers to the parent class. By calling this, we're getting access to the parent's properties and methods.
        this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
  
const mycar = new Model("Ford", "Mustang");
mycar.show();