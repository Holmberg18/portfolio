import { FC, useRef, RefObject } from 'react';
import { 
  Layout,
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
  const bRef = useRef(null)
  const aRef = useRef(null)
  const pRef = useRef(null)
  const refs: {[key: string]: RefObject<HTMLHeadingElement>} = {'banner': bRef, "about": aRef, "projects": pRef}
  return (
    <Layout>
      <DataContext.Provider value={data}>
        <Navigation />
        <Banner/>
        <About/>
        <Project/>
        <Footer/>
      </DataContext.Provider>
    </Layout>
  );
}

export default App;
