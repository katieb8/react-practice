// React's good for reusing code, and they recommend splitting out components into separate files

// to be able to use the component, you need to import the file in the application. Once it's imported, you can use it as if it was created here.
import Car from './Components';

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


// The state object is where you store property values that belongs to the component. And when the state object changes, the component re-renders.
// The state object is initialized in the constructor:
class Car extends React.Component {
  constructor(props) {
    super(props);
  this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

// The state object can contain as many properties as you want, e.g:
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}


// you can refer to the state object anywhere in the component by using 'this.state.propertyname', like:
// e.g {this.state.color}
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} 
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}


// you can change the value in the state object by using 'this.setState()' method
// e.g here adding a button with an onClick  will change the color property:
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}