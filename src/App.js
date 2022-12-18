import './App.css';
import {  Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { LogIn } from './pages/LogIn';

function App() {
  return (
    <Router className="App">
      <Header/>

      <Routes>
        <Route path ="/" element ={ <Home/>}/>
        <Route path ="/cart" element ={ <Cart/>}/>
        <Route path ="/login" element ={ <LogIn/>}/>


      </Routes>
    </Router>
  );
}

export default App;
