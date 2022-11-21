
import { CardContainer } from './components/cardContainer';
import Insight from './components/insight';
import CoinData from './components/CoinData';
import { useHomeContext } from './contexts/homeContext';
import Loading from './components/loading';
import { NewsProvider } from './contexts/newsontext';
import News from './components/News';




const Home = () => {
    const {data}=useHomeContext()

   
  return (
    <>
     {!data ? <Loading/> :<>
      <CardContainer/>
      <section className='dataDiv'>
      <Insight/>
      <CoinData />
      </section>
      <NewsProvider>
        <News/>
      </NewsProvider>
      </>}
    </>
  );
}

export default Home;
