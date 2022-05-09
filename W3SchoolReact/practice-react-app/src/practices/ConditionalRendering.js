// different ways of conditionally rendering components:
// if Statement, && Operator, Ternary Operator

// if statement - can be used to help decide which component to render, e.g using these two components:
function MissedGoal() {
    return <h1>MISSED!</h1>;
}
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
}

// creating another component that chooses which component to render based on a condition:
// if isGoal is true, render made goal's h1, if false, render 'MISSED!'
function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
}
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Goal isGoal={false} />);     // changing the isGoal attribute here will decide which title to render
  
  
//Logical && Operator
// can embed JavaScript expressions in JSX by using curly braces
// If cars.length is true, the expression after && will render:
function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }
      </>
    );
  }
  
const cars = ['Ford', 'BMW', 'Audi'];       // so e.g the page would render the h1 Garage, and then 'You have 3 cars in your garage.'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);

// emptying the length of the cars array to 0, would mean the page does not render the h2, and just the h1 would display
const cars = [];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);


// Ternary Operator
// condition ? true : false
// using the ternary operator using the same components above:
// Returning MadeGoal component if isGoal is true, otherwise return the MissedGoal component
function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);


// another example using the logical operator:
// return only if isLoggedIn equates to true
function App({isLoggedIn}) {
    return (
        <>
            <h1>My Application</h1>
            {isLoggedIn && <Profile /> }
        </>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);