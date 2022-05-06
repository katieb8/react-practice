// Javascript modules allow us to break up the code into separate files, making it easier to maintain the code base.
//Export and Import

// There are two types of exports: Named and Default

// You can create named exports two ways. In-line individually, or all at once at the bottom
//Named:
//in-line individually
export const name = "Katie"
export const age = 24

// all at once at the bottom
const name = "Jesse"
const age = 40

export { name, age }


// Default Exports
// You can only have one default export in a file, e.g 
const message = () => {
    const name = "Katie";
    const age = 24;
    return name + ' is ' + age + 'years old.';
  };
  
  export default message;

// You can import modules into a file in two ways, based on if they are named exports or default exports.
//Named exports must be destructured using curly braces. Default exports don't
//Import from named exports (importing named exports from the person.js file):
import { name, age } from "./person.js";

//Import a default export from the file message.js:
import message from "./message.js";