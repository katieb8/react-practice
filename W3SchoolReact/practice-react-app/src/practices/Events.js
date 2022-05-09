// performing actions based on user events (like HTML: click, change, mouseover etc)
// written in camelCase syntax e.g onClick
// React event handlers are written inside curly braces. e.g onClick={shoot}
<button onClick={shoot}>Take the Shot!</button>
// whereas in HTML it'd be like
// <button onclick="shoot()">Take the Shot!</button>

// Example: putting the 'shoot' function inside the Football component:
// rendering a take the shot button, and an alert Great shot on click of the button
function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);

  // To pass an argument to an event handler, use an arrow function
  // Here, 'Goal!' is a parameter to the 'shoot' function
  function Football() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);


  // Event objects:
  // Event handlers have access to the React event that triggered the function. E.g here, it's the click event
  function Football() {
    const shoot = (a, b) => {
      alert(b.type);
      //'b' represents the React event that triggered the function, here it's the 'click' event
    }
  
    return (
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>        // here representing 'a' and 'b', Goal and click. On click of the button, the alert shows the event (click)
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);