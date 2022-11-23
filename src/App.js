import './App.css';
import  { Navbar } from './components/navbar';
import Side from './components/Side';

import { XContextProvider} from './contexts/trialContext';
import { HomeProvider} from './contexts/homeContext';
import Home from './Home';
import Error from './components/Error';
import News from './components/News';

import { Outlet,} from "react-router-dom";






function App() {
 
  return (
    
    <div className="App">
  
      <HomeProvider>
      
      <Navbar/>
      <div className='flowDiv'>
        
      <XContextProvider>
        
        <Side/>
      </XContextProvider>
      <main> 
      <Outlet/>
      </main>
  
      </div>
     
      </HomeProvider>
    </div>
  );
}

export default App;
