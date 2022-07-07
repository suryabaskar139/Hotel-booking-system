import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Rooms from './components/Rooms';
import Footer from './components/Footer';
import { Container, Typography } from "@mui/material";
import Order from "./components/Order";
import {
  BrowserRouter as Router,
  
  Route,
 
  Routes
} from "react-router-dom";
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './ConfigureStore/store';


const baseURL="http://localhost:8000/api";
  axios.defaults.baseURL=baseURL;
  //axios.defaults.headers.post["Content-Type"]="multipart/form-data";
  axios.defaults.headers.post["Access-Control-Allow-Origin"]="*";
  axios.defaults.headers.post["Access-Control-Allow-Header"]="Origin, X-Requested-with, Content-Type, Accept";
  axios.defaults.headers.post["Access-Control-Allow-Methods"]="GET,HEAD,POST,PUT,PATCH,DELETE";




function App() {
  return (
    <>
     
    <Navbar />
    <Header />
    <Services />
    <Pricing />
    <Rooms />
    <Footer />
    <Container maxWidth="md">
      <Typography
      gutterBottom
      variant="h2"
      align ="center">
        Restaurant App
      </Typography>
      <Order />
    </Container>
    <Provider store={store}>
    
    <div className="App">
     <nav className="Nav">
      <Router>
       <Routes>
        <Route exact path="/" element={<SignIn/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
          
       </Routes>
    </Router>
      </nav>
    </div>
    </Provider>

  
    

    
    </>
  );
}

export default App;