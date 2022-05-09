// render lists with some type of loop
// the map() array method is the preferred method

// rendering all the cars
// this will render a h1 'Who lives in my garage?', and a list 'I am a' Ford, BMW and Audi in a bulleted list (ul)
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


// Keys
// Keys allow React to keep track of elements
// so if an item is updated or removed, only that item will be re-rendered instead of the entire list.
// Keys need to be unique to each sibling, but they can be duplicated globally

// the key should be a unique ID assigned to each item

// refactoring the above example to include keys:
// rendering the same output to the page as before, but using the key ids here for car brand
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


// another example:
function GroceryList() {
    const items = [
      {id: 1, name: 'bagels'},
      {id: 2, name: 'soy milk'},
      {id: 3, name: 'fruit'}
    ];
  
    return (
      <>
        <h1>Grocery List</h1>
        <ul>
          {items.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GroceryList />);