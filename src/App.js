import Dashboard from './Dashboard';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Products from './Products';
import Finance from './Finance';
import It from './It';
import Legal from './Legal';
import Marketing from './Marketing';
import Sales from './Sales';
import Card from './Components/Card';
import Chart from './Components/Chart';
function App() {

  return (
   <>

   {/* <Dashboard/> */}
   {/* <Navigation/> */}

   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/marketing" element={<Marketing/>}/>
    <Route path='/sales' element={<Sales/>}/>
    <Route path="/finance" element={<Finance/>}/>
    <Route path="/it" element={<It/>}/>
    <Route path="/legal" element={<Legal/>}/>
    {/* <Route path='*' element={<Chart/>}/> */}
   </Routes>
   
   </>
  );
}

export default App;
