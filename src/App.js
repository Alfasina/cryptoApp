import './App.css';
import CoinData from './components/CoinData';
import Datacards from './components/datacards';
import Insight from './components/insight';
import  { Navbar } from './components/navbar';
import Side from './components/Side';
import { XConceptProvider} from './contexts/trialContext';
import { HomeProvider} from './contexts/homeContext';
import { CardContainer } from './components/cardContainer';


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
       
      <CardContainer/>
      <section className='dataDiv'>
      <Insight/>
      <CoinData />
      </section>
      
      </main>
      </div>
      </HomeProvider>
    </div>
  );
}

export default App;
