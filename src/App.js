import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import addToCart from './redux/action';
import Header from './components/Header/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>  
    </div>
  );
}

export default App;
