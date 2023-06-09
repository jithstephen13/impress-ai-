import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './components/Navbar';
import { AllRoute } from './Routes/AllRoute';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <AllRoute/>

     
    </div>
  );
}

export default App;
