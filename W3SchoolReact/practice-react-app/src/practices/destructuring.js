// Destructuring makes it easy to extract only what is needed. Just take out the items we actually need

// the old way:
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way of assigning array items to a variable
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

// When destructuring arrays, the order that variables are declared is important

// If we only want the car and suv we can simply leave out the truck but keep the comma:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;


// example of destruction being useful when a function returns an array
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);


  // the old way of using an object inside a function:
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  // old way
  function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
  }


  // new way
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  // adding the object properties, and they dont have to be declared in a specific order
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  }


  // destructure deeply nested objects
  // by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle(vehicleOne)
  
  function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
  }