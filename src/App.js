import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Shipping from './Shipping/Shipping';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
         <Header></Header>
           <Switch>
               <Route exact path="/">
                     <Home></Home>
               </Route>
               <Route exact path ="/home">
                    <Home></Home>
               </Route>
              <Route exact path="/register">
                   <Register></Register>
              </Route>
              <Route exact path="/login">
                  <Login></Login>
              </Route>
              <Route exact path="/shipping">
                  <Shipping></Shipping>
              </Route>
          </Switch>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
