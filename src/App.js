import React from 'react'
import { BrowserRouter as Router, 
    Switch, 
    Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import { WeatherContext} from './WeatherContext'

const App = () => {

  return (
    <WeatherContext>
      <Router>
          <Switch>
            <Route exact path="/" >
              <WelcomePage /> 
            </Route>
            <Route path="/main" >
              <MainPage />
            </Route>
            <Route path="/city/:countryCode/:city" >
              <CityPage />
            </Route>
            <Route>
              <NotFoundPage /> 
            </Route>
          </Switch>
        </Router>
    </WeatherContext>
  )
}

export default App;
