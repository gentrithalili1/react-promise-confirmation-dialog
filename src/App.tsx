import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import routes from './routing/routes'
import { RouteNames } from './types/routing'
import NoMatch from './routing/pages/NoMatch'

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <Routes>
              {routes.map((route) => {
                const RouteElement = route.element
                return (
                  <Route
                    key={route.path}
                    index={route.path === RouteNames.SETUP}
                    path={route.path}
                    element={<RouteElement />}
                  />
                )
              })}
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
