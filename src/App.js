import logo from './logo.svg';
import Todo from "./Components/Todo";
import reducer from "./redux/Reducers/reducer";
import Store from "./redux/Reducers/reducer";
import {Provider} from "react-redux";


import './App.css';

function App(props) {
  return (
      <Provider store={Store}>
      <Todo></Todo>
      </Provider>
  );
}


export default App;
