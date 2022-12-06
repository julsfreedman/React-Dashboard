// By convention, all of your imports should be  at the top.
// components
import Header from './components/Header.js' // the .js is optional b/c we are working with JS so it is automatically assumed you are looking for a js file
import Player from "./components/Player";
import Board from "./components/Board"
//css
//import logo from './logo.svg';
import './App.css';

// export default function App() {
//   // What is JSX? JSX allows us to  run JS and HTML all in one place.  JSX is a hybrid  of JavaScript  and HTML
//   return (
//     <Header />
//   )
// };

//alternative to function App() {} above:
//// const App = () => {
//   return (
//     <h1>
//       React Tac Toe
//     </h1>
//   )
// }

//export default App;

// Vanilla JS
// function declarations using the function
// function expressions
// arrow functions

//PROPS:  we add props by adding key:value pairs inside our rendered components.  They look like attributes. WE can call props anything that we want. ex: whichPlayer="x" 
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>
      <Board />
    </div>
  );
}
export default App;
