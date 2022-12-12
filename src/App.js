import Dashboard from './Dashboard';
import {Route,Routes} from "react-router-dom"
import Products from './Products';
import Finance from './Finance';
import It from './It';
import Legal from './Legal';
import Marketing from './Marketing';
import Sales from './Sales';
import Hr from './Hr';
import Delivery from './Delivery';
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/marketing" element={<Marketing/>}/>
    <Route path='/sales' element={<Sales/>}/>
    <Route path="/finance" element={<Finance/>}/>
    <Route path="/it" element={<It/>}/>
    <Route path="/delivery" element={<Delivery/>}/>
    <Route path="/legal" element={<Legal/>}/>
    <Route path="/hr" element={<Hr/>}/>
   </Routes>
   
   </>
  );
}

export default App;
