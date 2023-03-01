import './App.css';
import { Home } from './components/pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { AboutUS } from './components/pages/AboutUS/AboutUS';
import { ContactUS } from './components/pages/ContactUS/ContactUS';
import { NotFound } from './components/pages/NotFound/NotFound';
import { ChangeColor } from './components/pages/ChangeColor/ChangeColor';
import { UseState } from './components/pages/UseState/UseState';
import { Hooks } from './components/pages/Hooks/Hooks';

function App() {
  return (
    <div className="App">  

    <Home />    
      <Routes>
        <Route path='/Home' element={<Home />} />
        {/* <Route path='/AboutUS' element={<AboutUS />} />
        <Route path='/ContactUS' element={<ContactUS />} /> */}
        <Route path='/UseState' element={<UseState />} />
        <Route path='/ChangeColor' element={<ChangeColor />} />
        <Route path='/Hooks' element={<Hooks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
