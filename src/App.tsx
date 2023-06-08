import { FC } from 'react';
import { 
  Layout,
  Navigation, 
  Banner,
  About,
} from '@/components'
import DataContext from '@/context/DataContext'
import content from './data/data.json'
import 'bootstrap/scss/bootstrap.scss'


const App: FC = () => {
  const data: PortfolioData = content
  return (
    <Layout>
      <Navigation />
      <DataContext.Provider value={data}>
        <Banner />
        <About />
      </DataContext.Provider>
    </Layout>
  );
}

export default App;
