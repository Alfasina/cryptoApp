import './App.css';
import  { Navbar } from './components/navbar';
import Side from './components/Side';
import { XConceptProvider} from './contexts/trialContext';
import { HomeProvider} from './contexts/homeContext';
import Home from './Home';

/* import {
  createBrowserRouter,
  RouterProvider,
  Route,Router
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Side/>,
      },
      {
        path: "about",
        element: <News/>,
      },
    ],
  },
]); */



function App() {
 
  return (
    
    <div className="App">
      <HomeProvider>
      <Navbar/>
      <div className='flowDiv'>
      <XConceptProvider>
      <Side/>
      </XConceptProvider>
      <main>
     <Home/>
      
      </main>
      </div>
      </HomeProvider>
    </div>
  );
}

export default App;
