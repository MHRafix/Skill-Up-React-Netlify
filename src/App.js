import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/AboutUs/About';
import Erorr from './Components/ErorrPage/Erorr';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import InstructorsPage from './Components/InstructorsPage/InstructorsPage';
import Services from './Components/Services/Services';
import Service from './Components/SingleService/Service';
import './Global.css';

// Main Site Root Component and React Routing Starts From Here 
function App() {
  return (
    <div className="App">
    
      {/* React routing start from  here */}
      <BrowserRouter>
      {/* This is site header */}
        <Header />
       <Switch>
         <Route exact path="/">
           {/* This is site home page */}
          <Home />
         </Route>
         <Route exact path="/home">
           {/* This is site home page */}
          <Home />
         </Route>
         {/* This site services page */}
         <Route exact path="/services">
          <Services />
         </Route>
        {/* This is site about us page */}
        <Route exact path="/about">
           <About />
         </Route>
         {/* This is site instructors page here  */}
         <Route exact path="/instructors" >
          <InstructorsPage />
         </Route>
         {/* This is site single service page  */}
         <Route exact path="/services/singleService/:serviceId">
           <Service />
         </Route>
         {/* This is site 404 erorr page  */}
         <Route path="*">
            <Erorr />
         </Route>
       </Switch>
       {/* This is site footer here  */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
