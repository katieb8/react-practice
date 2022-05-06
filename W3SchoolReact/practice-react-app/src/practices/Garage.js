// React's good for reusing code, and they recommend splitting out components into separate files
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