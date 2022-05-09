import React from 'react';
import ReactDOM from 'react-dom/client';

// React 'Props' are like function arguments in JS, e.g adding a brand attribute to the car element
// React proper are read-only. You can't change their value - you'll get an error
const myElement = <Car brand="Ford" />;
// The component receives the argument as a props object:
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


// Probs can be how you pass data from one component to another, as parameters.
// Example here: passing the 'brand' property from the 'Garage' component to the ' Car' component
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
    }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
}
  
  const roots = ReactDOM.createRoot(document.getElementById('roots'));
  roots.render(<Garage />);

// as well as strings, can send variables
// put the variable name inside curly brackets
// e.g here a variable named carName, and sending this to the Car component:
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    const carName = "Ford";
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carName } />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));    // the naming 'root' could be anything
  root.render(<Garage />);

  // and can send objects too
  // e.g here an object 'carInfo' and sending this to the Car component
  // passing in the name and the model here
  function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);