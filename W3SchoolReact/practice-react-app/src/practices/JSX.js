// using JSX
// JSX makes it easier to write and add HTML in React

//With JSX you can write expressions inside curly braces { }
// JSX will execute the expression and return the result, e.g this will render 'React is 10 times better with JSX' on the page
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

// To write HTML on multiple lines, put the HTML inside brackets, e.g
const myElement2 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
);

// The HTML code must be wrapped in ONE top level element. E.g if I write two paragraphs, they've got to be placed inside one parent element e.g a div, e.g:
const thisElement = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
);

// Or to prevent unnecessarily adding extra nodes to the DOM, you can use a fragment (which looks like an empty HTML tag: <></>) to wrap multiple lines. E.g:
const fragmentExample = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
);