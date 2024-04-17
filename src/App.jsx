import { Fragment, Suspense, } from 'react'
import './assets/styles/App.css'
import useHandleRoutes from './routes/routes';


function App() {


  const { routes } = useHandleRoutes();

  return (
    <Fragment>

      <Suspense fallback={'Loading'}>

        {routes}

      </Suspense>

    </Fragment>
  )
}

export default App;
