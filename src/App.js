import './App.css';
import Datacards from './components/datacards';
import Insight from './components/insight';
import { Navbar } from './components/navbar';
import { useHomeContext } from './contexts/homeContext';
const {state}=useHomeContext
function App() {

  return (
    <div className="App">
      <Navbar/>
      <section className='cardContainer'>
{[1,2,2,2].map(( x, i)=><Datacards key={i}/>) }
      </section>
      <section className='dataDiv'>
      <Insight/>

      </section>
      
    </div>
  );
}

export default App;
