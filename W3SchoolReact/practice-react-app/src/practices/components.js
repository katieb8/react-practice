// Components are independent and reusable bits of code.
// They work in isolation and return HTML

// when creating a React component, the component's name must start with an upper case letter.
// Components come in two types, Class components and Function components. With the class component, it must include extends React.Component
// This creates an inheritance to React.Component, and gives the component access to React.Component's functions
// The component also needs a render() method, this returns HTML e.g this class component:
class Car extends React.Component {
    render() {
      return <h2>Class component about a car!</h2>;
    }
}

// example using function component (function components can be written with less code and are easier to understand)
function Car() {
    return <h2>Function component about a car!</h2>;
}
// Add these lines to use the component in the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);


// Props (properties):
// Props are like function arguments, you send them into the component as attributes
// pass a color to the Car component, and use it in the render() function:
function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car color="red"/>);


  // you can refer to components inside other components too, e.g using the car component inside the garage component:
  function Car() {
    return <h2>I am a Car!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);