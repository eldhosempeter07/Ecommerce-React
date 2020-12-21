import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage-component';

const HatPage=()=>(
  <h1>Hat Page</h1>
)

function App() {
  return (
    <div>
      <Route exact path = '/' component={HomePage}/>
      <Route path='/hats' component={HatPage}/>
    </div>
  );
}

export default App;
