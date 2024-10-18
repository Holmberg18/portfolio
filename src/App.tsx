import { FC } from 'react';
import { 
  Container,
  Navigation, 
  Banner,
  About,
  Project,
  Footer
} from '@/components'
import DataContext from '@/context/DataContext'
import content from '@/data/data.json'
import 'bootstrap/scss/bootstrap.scss'


const App: FC = () => {
  
  const data: PortfolioData = content

  return (
    <Container fluid>
      <DataContext.Provider value={data}>
        <Navigation />
        <Banner/>
        <About/>
        <Project/>
        <Footer/>
      </DataContext.Provider>
    </Container>
  );
}

export default App;
