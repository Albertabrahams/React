import './App.css';
import AddEvent from './components/addEvents/addevent';
import Form from './components/form/Form';
import MouseEvents from './components/mouseEvents/MouseEvents';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <MouseEvents/> */}
      <Form/>
    </div>
  );
}

export default App;
