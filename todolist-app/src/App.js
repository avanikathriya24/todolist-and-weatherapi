import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/Weather/Weather';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Todo/>}/>
                <Route path='/weather' element={<Weather/>}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
