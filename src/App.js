 import './App.css';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ListModels from './components/screens/ListModels';
import Models from './components/detectionModels/Models';
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Result from './components/screens/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen/>}>
        </Route>
        <Route path="/modellists" element={<ListModels/>}>
         </Route>
        <Route path="/models" element={<Models/>}>
          </Route>
        <Route path="/result" element={<Result/>}>
        </Route>               
      </Routes>
    </BrowserRouter>

  );
}

export default App;
