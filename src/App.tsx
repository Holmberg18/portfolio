import { FC } from 'react';
import { Navigation, Banner, Layout } from './components'
import DataContext from './context/DataContext'
import data from './data/data.json'
import 'bootstrap/scss/bootstrap.scss'


const App: FC = () => {
  return (
    <Layout>
      <Navigation />
      <DataContext.Provider value={data}>
        <Banner />
      </DataContext.Provider>
    </Layout>
  );
}

export default App;
