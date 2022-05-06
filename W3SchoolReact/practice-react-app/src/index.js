import React from 'react';
import ReactDOM from 'react-dom';


class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Car("Ford", "Fiesta");
mycar.show();